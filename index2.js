/* const exprees = require ("express"); */
import exprees from "express";
import home from "./pages/home.js";
import Submit from "./pages/submit.js";
import login from "./pages/login.js";
const Port = 6700;
const app= exprees();
app.get("",(req,res)=>{
  res.send(home())
})
app.get("/login",(req,res)=>{
  res.send(login())
})
app.post("/submit",(req,res)=>{
  res.send(Submit())
})
app.listen(Port,()=>{
  console.log(`server is running on http://localhost:${Port}`);
  
})