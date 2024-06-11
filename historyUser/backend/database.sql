create TABLE log(
  id SERIAL PRIMARY KEY,
  textlog VARCHAR(255),
  created_at TIMESTAMP,
  id_user INTEGER
);
