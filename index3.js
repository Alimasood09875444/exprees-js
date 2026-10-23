import express from "express"
import home from "./pages/home.js"
import login from "./pages/login.js"
import Submit from "./pages/submit.js";
const port = 5609
const app = express();
app.get("/",(req,res)=>{
  res.send(home())
})
app.get("/login",(req,res)=>{
  res.send(login())
})
app.post("/submit",(req,res)=>{
  res.send(Submit())
})
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
  
})