const express = require('express')
const app = express() ;
const port = process.env.PORT || 5000 ;

const chefs = require('./data/chefinfo.json');

app.get('/', (req, res)=>{
    res.send('the Kitchen server')
})

app.get('/chefs',(req, res)=>{
    res.send(chefs)
})



app.listen(port , ()=>{
    console.log('the server is running port', port)
})