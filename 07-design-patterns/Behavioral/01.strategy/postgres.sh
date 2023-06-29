  docker run \
    --name postgres \
    -e POSTGRES_USER=abs \
    -e POSTGRES_PASSWORD="senha001" \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

  
  CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR(255) NOT NULL);

  npm i knex pg
