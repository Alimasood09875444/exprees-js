import express from "express";
const Port = 1130;
const app = express();
function checkAge(req,res,next){
  if(!req.query.age||req.query.age<18){
    res.send("Alert You Cannot Access")
  }
  else{
    next();
  }
}
app.get("/",(req,res)=>{
  res.send("Home page")
})
app.get("/login",checkAge,(req,res)=>{
  res.send("login page")
})
app.get("/Contact",(req,res)=>{
  res.send1("contact page")
})
app.get("/wait",(req,res)=>{
  setTimeout(() => {
    res.send("wait 1 sec")
  }, 1000);
})
app.use((req,res)=>{
  res.send("404 Page")
})
function ErrorHandling(error,req,res,next){
  res.status(error.status||500).send("Try after sometime")
}
app.use(ErrorHandling)
app.listen(Port,()=>{
  console.log(`Server is running on http://localhost:${Port}`);
  
})