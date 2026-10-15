/* const exprees = require ("express"); */
import exprees from "express";
import home from "./pages/home.js";
import contact from "./pages/contact.js";
const Port = 6700;
const app= exprees();
app.get("",(req,res)=>{
  res.send(home())
})
app.get("/contact",(req,res)=>{
  res.send(contact())
})
app.listen(Port,()=>{
  console.log(`server is running on http://localhost:${Port}`);
  
})