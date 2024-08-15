const db=require('../models')
const Employee=db.employee;

//get employees name in uppercase
const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll({});
    res.status(200).json(resEmp)
}

const addEmployee = async (req,res) => {
    var resEmp='';
    var messages={};
    try{
        resEmp=await Employee.create(req.body)
    }
    catch(e){
        let errorMessages={'isAlpha':'Only alphabets are allowed','isEmail':'Invalid Email'}
        e.errors.forEach(error=>{
            messages[error.path]=errorMessages[error.validatorKey];
        })  
    }
    res.status(200).json({data:resEmp,messages:messages});
}

module.exports={
    getEmployees,
    addEmployee
}