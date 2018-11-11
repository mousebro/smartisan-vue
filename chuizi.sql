SET NAMES UTF8;
DROP DATABASE IF EXISTS chuizi;
CREATE DATABASE chuizi CHARSET=UTF8;
USE chuizi;
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(11) NOT NULL UNIQUE,
    upwd VARCHAR(16) NOT NULL,
    avator VARCHAR(256)
);
INSERT INTO user VALUES(NULL,"13456789456","123456","/img/mdlist1.jpg");
INSERT INTO user VALUES(NULL,"13456789457","123456","/img/mdlist2.jpg");
INSERT INTO user VALUES(NULL,"13456789458","123456","/img/mdlist3.jpg");
INSERT INTO user VALUES(NULL,"13456789459","123456","/img/mdlist4.jpg");
INSERT INTO user VALUES(NULL,"13456789450","123456","/img/mdlist1.jpg");

