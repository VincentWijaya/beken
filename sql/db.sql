CREATE DATABASE test;

CREATE TABLE test.user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  parent INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO test.user (`username`, `parent`) VALUES ('Ali', '2');
INSERT INTO test.user (`username`, `parent`) VALUES ('Budi', '0');
INSERT INTO test.user (`username`, `parent`) VALUES ('Cecep', '0');