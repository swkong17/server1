//express
const express= require('express');

//server
const app= express();
//port
const PORT= Number(process.env.PORT) || 3000;

//roter
app.get('/home',(req,res)=>{
    res.status(200).send('<h1>home</h1>');
});

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>about</h1>');
    res.send('hello');
    
});

app.get('/users/:id',(req,res)=>{
    const {id}= req.params;
    res.status(200).send(`<h1>user id: ${id}</h1>`);
});

app.post('/home',(req,res)=>{
    res.status(200).send('<h1>home post hirma=</h1>');
});
//서버 실핼
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});