import express from "express";
import {pool as db} from "../core/db";
import log from '../core/log'

class UserController{
  async createUser(req: express.Request, res: express.Response){

    try{
      const {name, surname} = req.body;
      const newUser = await db.query(`INSERT INTO users (name, surname) values ($1, $2) RETURNING *`, [name, surname])
      log(name, surname, newUser.rows[0].id, "create")
      res.json({
        status:'success',
        data: newUser.rows[0]
      })
    }
    catch(err){
      res.json({
        status:'500',
        message:err
      })
    }
  }
  async getUsers(req:express.Request, res: express.Response){
    try{
      const users = await db.query('SELECT * FROM users');
      res.json({
        status:'success',
        data: users.rows
      })
    }catch(err){
      res.json({
        status:'500',
        message:err
      })
    }
    
  }

  async updateUser(req: express.Request, res: express.Response){
    try{
      const {id, name, surname} = req.body;
      const user = await db.query('UPDATE users set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id]);
   
      log(name, surname, user.rows[0].id, "update")
      res.json({
       status:'success',
       data: user.rows[0]
     })
    }
    catch(err){
      res.json({
        status:'500',
        message:err
      })
    }
  
  }
}

export default new UserController();
