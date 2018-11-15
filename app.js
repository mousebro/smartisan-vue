//app.js
//1:加载模块
const express = require("express");
const pool  = require("./pool");
const bodyParser = require("body-parser")
//const cookieParser = require("cookie-parser")
//const session = require("express-session")
//2:创建express对象
var app = express();
app.set('trust proxy',1);
// app.use(session({
//   secret: 'qq',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {}
// }));
//app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块   
const cors = require("cors");
//2.2:配置允许哪个程序跨域访问 脚手架   11:16
app.use(cors({
  origin:[
    "http://127.0.0.1:3001","http://localhost:3001","http://localhost:8080","http://127.0.0.1:8080"],
  credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));
//用户登录
app.post("/login",(req,res)=>{
  
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var sql = `select count(uid) as c,uid,avator from user where uname=? AND upwd = ?`
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
   result = JSON.stringify(result)
   result = JSON.parse(result)
    if(result[0].c>0){
      var uid = result[0].uid
      var avator = result[0].avator
      var sql = `select pCount from shoppingCart where userid=?`
      pool.query(sql,uid,(err,result)=>{//请求用户购物车中的商品数量
        if(err) throw err;
        result = JSON.stringify(result)
        result = JSON.parse(result)
        var count=0;
        for(var i in result){
          count+=result[i].pCount
        }
        res.send({uid:uid,uname:uname,avator:avator,pcount:count,msg:"登录成功",code:200})
      })
     
    }else{
      res.send({code:-1,msg:"登录失败,请检查用户名和密码"})
    }
  })
})
app.get("/loginout",(req,res)=>{

  res.send("fdsafd")
})
app.get("/islogin",(req,res)=>{
  res.writeHead(200);
  if(req.session.uid===undefined){
    res.write(JSON.stringify({ok:0}))
    res.end()
  }else{
    var uid=req.session.uid;
    var sql=
     "select * from xz_user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      var user=result[0];
      res.write(JSON.stringify({
        ok:1,uname:user.uname
      }))
      res.end()
    })
  }
  
})
app.get("/getproduct",(req,res)=>{
  var uid = req.query.uid
 var sql = `SELECT * FROM shoppingcart INNER JOIN product ON pCid = pid WHERE userid =?`
 pool.query(sql,uid,(err,result)=>{
   if(err) throw err;
   res.send(result)
 })
})
//商品详情页，根据商品id来获取商品的详细信息
app.get("/product",(req,res)=>{
  var pid = req.query.pid
  var sql1 = `select * from product where pid=?`
  var sql2 = `select * from psize where sPid=?`
  var sql3 = `select * from pcolor where pcid=?`
  pool.query(sql1,pid,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      var product = result[0]
      pool.query(sql2,pid,(err,result)=>{
        if(err) throw err;
        if(result.length>=0){
          var size=result
          pool.query(sql3,pid,(err,result)=>{
            if(err) throw err;
            if(result.length>=0){
              var color=result
              res.send({code:200,msg:{product:product,size:size,color:color}})
            }
          })
        }
      })
    }
  })
})
//跟新用户购物车列表
app.post("/updateCart",(req,res)=>{
  var obj = req.body
  var userid = obj.userid;
  var pCid = obj.pCid;
  var pColor = obj.pColor;
  var pCount = obj.pCount;
  var psize = obj.psize;
  var sql = `SELECT count(pCid) as c,pCount from shoppingCart where userid=? AND pCid=?`;
  pool.query(sql,[userid,pCid],(err,result)=>{
    if(err) throw err;
    if(result[0].c>0){
      var count=result[0].pCount
      pCount+=count
      var sql2 = `UPDATE shoppingCart SET pCount=? ,psize=?,pColor=? WHERE pCid=? AND userid=?`;
      pool.query(sql2,[pCount,psize,pColor,pCid,userid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send({code:201,msg:"添加修改成功"})
        }
      })
    }else{
      var sql3 = `INSERT INTO shoppingCart(userid,pCid,pColor,pCount,psize) VALUES(?,?,?,?,?)`;
      pool.query(sql3,[userid,pCid,pColor,pCount,psize],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send({code:202,msg:"添加成功"})
        }
      })
    }
  })
})
app.post("/delateCart",(req,res)=>{
    var query = req.body.list
    var sql = `DELETE FROM shoppingCart WHERE `
    for(var i in query){
      if(i==0){
        sql+=` cid=?`
      }else{
        sql+=` or cid=?`
      }
    }
    pool.query(sql,query,(err,result)=>{
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:1,msg:"删除成功"})
      }
    })
})
//4:绑定监听端口
app.listen(3002);
//功能一:学子商城首页图片轮播
//GET /imagelist   json


