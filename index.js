const express=require('express')
var bodyParser=require('body-parser')
const Employee=require('./models/employees');

const app=express()
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/create-tables',function(req,res){
    Employee.sync({force:true});
    res.send('Table Created');
})

app.listen(3000,()=>{
    console.log('App will run on: http://localhost:3000')
})