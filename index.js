const express = require('express')
const app = express() ;
const cors = require('cors')
const port = process.env.PORT || 5000 ;

const chefs = require('./data/chefinfo.json');
app.use(cors())
app.get('/', (req, res)=>{
    res.send('the Kitchen server')
})

app.get('/chefs',(req, res)=>{
    res.send(chefs)
})


app.get('/chefs/:id', (req , res)=>{
    const id = req.params.id ;
    const singleChef = chefs.find(s => s.id === id);
    res.send(singleChef)
})



app.listen(port , ()=>{
    console.log('the server is running port', port)
})