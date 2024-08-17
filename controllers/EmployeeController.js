const { QueryTypes } = require('sequelize');
const db=require('../models')
const Employee=db.employee;
const Address=db.employee_address;

const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll({
        include: {
            model:Address,
            as:"addresses",
        },
    });
    res.status(200).json(resEmp)
}

//add attributes
const getEmployees2 = async (req,res) => {
    const resEmp=await Employee.findAll({
        attributes:['id','first_name'],
        include: {
            model:Address,
            as:"addresses",
            attributes:['state','district']
        },
    });
    res.status(200).json(resEmp)
}

const getAddress = async (req,res) => {
    const resEmp=await Address.findAll({
        include: Employee,
    });
    res.status(200).json(resEmp)
}

module.exports={
    getEmployees,
    getEmployees2,
    getAddress
}