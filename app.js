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
      res.send({uid:result[0].uid,uname:uname,avator:result[0].avator,msg:"登录成功",code:200})
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
//4:绑定监听端口
app.listen(3002);
//功能一:学子商城首页图片轮播
//GET /imagelist   json


