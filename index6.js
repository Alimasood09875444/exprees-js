import express from "express";
const Port = 7350;
const app = express();
function CheckAge(req,res,next){
if(!req.query.age|| req.query.age<18){
  res.send("Alert ! you cannot access")
}
else{
  next();
}
}
function CheckRoute(req,res,next){
  console.log("your Request url is ", req.url);
  
  next()
}
app.get("/",(req,res)=>{
res.send("home Page")
})
app.get("/login",CheckRoute,(req,res)=>{
res.send("login Page")
})
app.get("/Admin",CheckAge,(req,res)=>{
res.send("ADMIN Page")
})
app.listen(Port,()=>{
  console.log(`Server is running on http://localhost:${Port}`);
  
})