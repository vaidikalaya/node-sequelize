const express=require('express')
var bodyParser=require('body-parser')
require('./models');
const empCtrl=require('./controllers/EmployeeController');

const app=express()
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/employees1',empCtrl.getEmployees1)
app.get('/employees2',empCtrl.getEmployees2)
app.get('/employees3',empCtrl.getEmployees3)
app.get('/employees4',empCtrl.getEmployees4)
app.get('/employees5',empCtrl.getEmployees5)
app.get('/employees6',empCtrl.getEmployees6)
app.get('/employees7',empCtrl.getEmployees7)


app.listen(3000,()=>{
    console.log('App will run on: http://localhost:3000')
})