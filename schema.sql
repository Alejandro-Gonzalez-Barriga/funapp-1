DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  beer varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO items (id, beer, description)
VALUES("0", "Corona", "Familiar");
