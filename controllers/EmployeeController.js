const db=require('../models')
const Employee=db.employee;

//get employees name in uppercase
const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll({});
    res.status(200).json(resEmp)
}

const addEmployee = async (req,res) => {
    const resEmp=await Employee.create(req.body);
    res.status(200).json(resEmp)
}


module.exports={
    getEmployees,
    addEmployee
}