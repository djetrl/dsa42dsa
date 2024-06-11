import axios from "axios";
const url:string = 'http://localhost:3001/api/log';

const log = (name:string, surname:string, id:number, type:string) => {

  let textLog;
  if(type == 'create'){
    textLog = `Создан пользователь имя:${name} фамилия:${surname}`
    console.log('create');
  }if(type == 'update'){
    textLog = `Обновлены данные пользователя имя:${name} фамилия:${surname}`
    console.log('update');
  }

  try{
    axios.post(url, {
      "textlog": textLog,
      "id_user": id,
      "created_at": new Date()
    }).then((respons)=>{
      console.log(respons)
    })
  }
  catch(err){
    throw err;
  }
}

export default log;