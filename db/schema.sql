### Schema

CREATE DATABASE users_db;
USE users_db;

CREATE TABLE users(
	id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (25) NOT NULL,
    last_name VARCHAR (25) NOT NULL,
    email VARCHAR (25) NOT NULL,
    PRIMARY KEY (id)
);
--defines whether the user is a teacher or student
CREATE TABLE user_type(
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE documents(
	id INT AUTO_INCREMENT NOT NULL,
    doc_name VARCHAR (25) NOT NULL,
    doc_type VARCHAR (25) NOT NULL,
    doc_date TIMESTAMP,
    PRIMARY KEY (id)
);
