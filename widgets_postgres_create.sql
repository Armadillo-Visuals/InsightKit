CREATE TABLE widgets (
    id SERIAL PRIMARY KEY, 
    graphType VARCHAR NOT NULL, 
    dataType VARCHAR NOT NULL, 
    parameter1 VARCHAR,
    parameter2  VARCHAR, 
    parameter3 VARCHAR
); 