const express=require('express')
var bodyParser=require('body-parser')
require('./models');
const empCtrl=require('./controllers/EmployeeController');

const app=express()
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/add',empCtrl.addEmployee)
app.get('/add2',empCtrl.addEmployee2)

app.listen(3000,()=>{
    console.log('App will run on: http://localhost:3000')
})