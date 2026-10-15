const http = require("http");
const Port =3400;
const server = http.createServer((req,res)=>{
  res.end("hlo")
})
server.listen(Port,()=>{
  console.log(`server is running on http://localhost:${Port}`);
  
})