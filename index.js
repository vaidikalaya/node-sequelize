const express=require('express')
var bodyParser=require('body-parser')
require('./models');
const empCtrl=require('./controllers/EmployeeController');

const app=express()
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/employees',empCtrl.getEmployees)
app.post('/add_employee',empCtrl.addEmployee)

app.listen(3000,()=>{
    console.log('App will run on: http://localhost:3000')
})