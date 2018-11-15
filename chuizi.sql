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

/*商品列表*/
CREATE TABLE product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    price INT,
    title VARCHAR(128),
    scrib VARCHAR(256),
    imgUrl VARCHAR(256),
    color VARCHAR(32),
    mask VARCHAR(32)
);
INSERT INTO product(price,title,scrib,imgUrl,mask) VALUES(1789.00,"坚果 Pro2S","双系统，无限屏",'/img/plist01.webp',"买赠");
INSERT INTO product(price,title,scrib,imgUrl,mask) VALUES(1879.00,"坚果3","漂亮的不像实力派",'/img/plist02.webp',"买赠");
INSERT INTO product(price,title,scrib,imgUrl,mask) VALUES(2999.00,"坚果 R1","次世代旗舰手机",'/img/plist03.webp',"买赠");
INSERT INTO product(price,title,scrib,imgUrl,mask) VALUES(1799.00,"坚果 Pro2","漂亮的不像实力派",'/img/plist04.webp',null);
INSERT INTO product(price,title,scrib,imgUrl,mask) VALUES(1789.00,"坚果3","漂亮的不像实力派",'/img/plist01.webp',"买赠");

CREATE TABLE psize(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    sPid INT NOT NULL,
    size VARCHAR(32),
    FOREIGN KEY(sPid) REFERENCES product(pid)
);
INSERT INTO psize(sPid,size) VALUES(1,"4G+64G");
INSERT INTO psize(sPid,size) VALUES(1,"6G+64G");
INSERT INTO psize(sPid,size) VALUES(1,"6G+128G");
INSERT INTO psize(sPid,size) VALUES(2,"4G+64G");
INSERT INTO psize(sPid,size) VALUES(2,"6G+64G");
INSERT INTO psize(sPid,size) VALUES(2,"6G+128G");
INSERT INTO psize(sPid,size) VALUES(3,"4G+64G");
INSERT INTO psize(sPid,size) VALUES(3,"6G+64G");
INSERT INTO psize(sPid,size) VALUES(3,"6G+128G");
INSERT INTO psize(sPid,size) VALUES(3,"8G+512G");
INSERT INTO psize(sPid,size) VALUES(3,"8G+1T");
INSERT INTO psize(sPid,size) VALUES(4,"4G+64G");
INSERT INTO psize(sPid,size) VALUES(4,"6G+64G");
INSERT INTO psize(sPid,size) VALUES(4,"6G+128G");
INSERT INTO psize(sPid,size) VALUES(5,"4G+64G");
INSERT INTO psize(sPid,size) VALUES(5,"6G+64G");
INSERT INTO psize(sPid,size) VALUES(5,"6G+128G");

CREATE TABLE pcolor(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    pcid INT NOT NULL,
    bg VARCHAR(32),
    FOREIGN KEY(pcid) REFERENCES product(pid)
);

INSERT INTO pcolor(pcid,bg) VALUES(1,"black");
INSERT INTO pcolor(pcid,bg) VALUES(1,"blue");
INSERT INTO pcolor(pcid,bg) VALUES(1,"red");

INSERT INTO pcolor(pcid,bg) VALUES(2,"black");
INSERT INTO pcolor(pcid,bg) VALUES(2,"red");
INSERT INTO pcolor(pcid,bg) VALUES(2,"yellow");
INSERT INTO pcolor(pcid,bg) VALUES(3,"black");
INSERT INTO pcolor(pcid,bg) VALUES(3,"red");

INSERT INTO pcolor(pcid,bg) VALUES(4,"red");
INSERT INTO pcolor(pcid,bg) VALUES(4,"black");
INSERT INTO pcolor(pcid,bg) VALUES(4,"blue");
INSERT INTO pcolor(pcid,bg) VALUES(4,"green");

INSERT INTO pcolor(pcid,bg) VALUES(5,"red");
INSERT INTO pcolor(pcid,bg) VALUES(5,"blue");
INSERT INTO pcolor(pcid,bg) VALUES(5,"yellow");


/*用户购物车列表*/
CREATE TABLE shoppingCart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    userid INT NOT NULL,
    pCid INT NOT NULL,
    pCount INT  NOT NULL,
    pColor VARCHAR(32),
    psize VARCHAR(32),
    FOREIGN KEY(userid) REFERENCES user(uid),
    FOREIGN KEY(pCid) REFERENCES product(pid)
);
INSERT INTO shoppingCart(userid,pCid,pCount) VALUES(1,1,1);
INSERT INTO shoppingCart(userid,pCid,pCount) VALUES(1,2,3);
INSERT INTO shoppingCart(userid,pCid,pCount) VALUES(1,3,4);
INSERT INTO shoppingCart(userid,pCid,pCount) VALUES(2,1,1);
INSERT INTO shoppingCart(userid,pCid,pCount) VALUES(2,2,3);
INSERT INTO shoppingCart(userid,pCid,pCount) VALUES(3,3,4);
