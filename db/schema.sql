DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;

CREATE TABLE teachers(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (25) NOT NULL,
    last_name VARCHAR (25) NOT NULL,
    email VARCHAR (40) NOT NULL,
    pass VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE students(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (25) NOT NULL,
    last_name VARCHAR (25) NOT NULL,
    email VARCHAR (40) NOT NULL,
    pass VARCHAR (50) NOT NULL,
    instrument VARCHAR (25) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE documents(
    id INT AUTO_INCREMENT NOT NULL,
    doc_name VARCHAR (25) NOT NULL,
    doc_type VARCHAR (25) NOT NULL,
    doc_date TIMESTAMP,
    PRIMARY KEY (id)
);
