import express from "express";
const Port = 7850;
const app = express();
function CheckAge(req,res,next){
if(!req.query.age|| req.query.age<18){
  res.send("Alert ! you cannot access")
}
else{
  next();
}
}
app.use(CheckAge)
app.get("/",(req,res)=>{
res.send("home Page")
})
app.get("/login",(req,res)=>{
res.send("login Page")
})
app.get("/Admin",(req,res)=>{
res.send("ADMIN Page")
})
app.listen(Port,()=>{
  console.log(`Server is running on http://localhost:${Port}`);
  
})