-- Creates the database\
CREATE DATABASE burgers_db;

USE burgers_db;

--Create table to hold & pull user informaiton from
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT flase NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;

