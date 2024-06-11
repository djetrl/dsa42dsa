import {pool as db} from "../core/db.js";
import axios from "axios";

class LogController{
  async createLog(req, res){
    try{
      const {textlog, created_at,id_user } = req.body;
      const newLog = await db.query(`INSERT INTO log (textLog, created_at, id_user) values ($1, $2, $3) RETURNING *`, [textlog, created_at, id_user])
  
      res.json({
        status:'success',
        date:newLog.rows[0]
      })
    }catch(err){
      res.json({
        status:'500',
        message:err
      })
    }
  }
  
  async getLog(req, res){
    try{
      const page =  isNaN(+req.query.page) ? -1 : +req.query.page;
      const userID = req.query.userID;
  
      let log;
      let counteItem;
      if(userID){
        log = await db.query('SELECT * FROM log WHERE id > $1 AND id_user = $2 ORDER BY id ASC LIMIT 10',[page, userID]);
        counteItem = await db.query('SELECT COUNT(*) FROM log  WHERE id_user = $1', [userID]);
      }else{
        log = await db.query('SELECT * FROM log WHERE id > $1  ORDER BY id ASC LIMIT 10', [page * 10]);
        counteItem = await db.query('SELECT COUNT(*) FROM log');
      }
      res.json({
        status:'success',
        data: log.rows,
        Totalitem:counteItem.rows[0].count
      })
    }catch(err){
      res.json({
        status:'500',
        message:err
      })
    }
    
  }
}
export default new LogController();
