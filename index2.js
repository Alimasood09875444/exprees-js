import express from "express";
const port = 5600
const app = express();
app.get("/",(req,res)=>{
  res.send("Home Page")
})
app.get("/login",(req,res)=>{
  res.send("login Page")
})
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
  
})