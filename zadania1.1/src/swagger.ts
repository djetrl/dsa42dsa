
import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'Задания 1.1',
    description: 'Задания 1.1'
  },
  host: 'localhost:8080',
  schemes:['http']
};

const outputFile = './swagger-output.json';
const routes = ['./index'];


swaggerAutogen()(outputFile, routes, doc).then(async ()=>{
  await import('./index');
});