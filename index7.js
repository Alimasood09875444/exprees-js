import express from "express";
const Port = 7050;
const app = express();
app.use(express.urlencoded())
app.get("/",(req,res)=>{
res.send("home Page")
})
app.get("/login",(req,res)=>{
res.send(` <form action="/submit" method="post">
    <input type="text" placeholder="Enter your Name" name="name"><br></br>
    <input type="password" placeholder="Enter your password" name ="password"><br></br>
    <button>Submit</button>
  </form>`)
})
app.post("/submit",(req,res)=>{
res.send("submit Page")
console.log(req.body);

})
app.listen(Port,()=>{
  console.log(`Server is running on http://localhost:${Port}`);
  
})