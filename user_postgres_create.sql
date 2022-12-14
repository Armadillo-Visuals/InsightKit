CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    firstName VARCHAR NOT NULL, 
    lastName VARCHAR NOT NULL, 
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL 
); 