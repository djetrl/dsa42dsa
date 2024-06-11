import express from 'express';
import cors from 'cors';
import logRouter from './routes/log.routes.js';
const PORT = process.env.PORT || 3001

const app = express();

const corsOptions ={
  origin:['http://localhost:3000', 'http://localhost:8080'], 
  credentials:true,   
  optionSuccessStatus:200,
  allowedHeaders:["content-type","access-control-allow-headers", "Token","Origin", "X-Requested-With", "Accept", "Authorization", ],
  preflightContinue: false,
  optionsSuccessStatus:204,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",


}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', logRouter)




app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));
