DROP DATABASE IF EXISTS pesca ;
CREATE DATABASE pesca;

USE pesca;

CREATE TABLE pescaria (
	id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cidade VARCHAR(100) NOT NULL,
	quantidade VARCHAR (100) NOT NULL
);