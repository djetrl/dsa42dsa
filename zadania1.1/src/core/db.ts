import pgk from 'pg'

const pool = new pgk.Pool({
  user:'postgres',
  password:'root',
  host:'localhost',
  port:5432,
  database:'node_postgres'
});

export {pool};