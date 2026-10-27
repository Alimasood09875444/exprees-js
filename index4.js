import express from "express";
import path from "path"
const Port = 5530
const app = express()
app.get("/",(req,res)=>{
  const absPath = path.resolve('view/home.html')
  res.sendFile(absPath)
})
app.get("/login",(req,res)=>{
  const absPath = path.resolve('view/login.html')
  res.sendFile(absPath)
})
app.post("/submit",(req,res)=>{
  const absPath = path.resolve('view/submit.html')
  res.sendFile(absPath)
})
app.use((req,res)=>{
   const absPath = path.resolve('view/404.html')
   res.status(404).sendFile(absPath)
})
app.listen(Port,()=>{
  console.log(`server is running on http://localhost:${Port}`);
  
})
