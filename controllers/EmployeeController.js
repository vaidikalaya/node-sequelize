const { QueryTypes } = require('sequelize');
const db=require('../models')
const Employee=db.employee;
const Address=db.employee_address;

const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll({
        include: Address,
    });
    res.status(200).json(resEmp)
}

const getAddress = async (req,res) => {
    const resEmp=await Address.findAll({
        include: Employee,
    });
    res.status(200).json(resEmp)
}

/*With Alias
const getAddress = async (req,res) => {
    const resEmp=await Address.findAll({
        include: {
            model:Employee,
            as:"employee"
        },
    });
    res.status(200).json(resEmp)
}
*/

module.exports={
    getEmployees,
    getAddress
}