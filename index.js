//http

const http= require('http');
//fs
const fs= require('fs');

const PORT= Number(process.env.PORT) || 3000;
const server= http.createServer((req,res)=>{
   // console.log('요청');
   // console.log(req.method);
    //response header
   // res.setHeader('Content-Type','text/html; charset=utf-8');
    //const readStream= fs.createReadStream(__dirname+'/index.html','utf8');
   // readStream.pipe(res);
    //response body
   // res.write('<h1>hello im a student i love node.js & professor </h1>');
   // res.write('<p>node.js</p>');
   // res.end('<p>end</p>');
   res.setHeader('Content-Type','text/html; charset=utf-8');
   const { method, url } = req;
   if(method==='GET' && url==='/home'){
    res.statusCode=200;
    res.end('<h1>home</h1>');
   } else if(method==='GET' && url==='/about'){
       res.statusCode=200;
       res.end('<h1>about</h1>');
   } else{
       res.statusCode=404;
       res.end('<h1>not found in 백틱욱!</h1>');
   }
});

server.listen(PORT,()=>{
    console.log(`=who is a 백틱욱= Server is running on port ${PORT}`);
});