import express from 'express';
import usersRouter from './routes/users.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json())
app.use('/api', usersRouter);

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));
