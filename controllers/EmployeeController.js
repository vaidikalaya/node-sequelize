const { QueryTypes } = require('sequelize');
const db=require('../models')
const Employee=db.employee;
const Skill=db.skill;

const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll();
    res.status(200).json(resEmp)
}

const getEmployeesWithDeleted = async (req,res) => {
    const resEmp=await Employee.findAll({
        paranoid: false,
    });
    res.status(200).json(resEmp)
}

const deleteEmployee = async (req,res) => {
    const resEmp=await Employee.destroy({
        where: {
          id: 2,
        },
    });
    res.status(200).json(resEmp)
}

const forceDeleteEmployee = async (req,res) => {
    const resEmp=await Employee.destroy({
        where: {
          id: 1,
        },
        force: true,
    });
    res.status(200).json(resEmp)
}

const restoreEmployee = async (req,res) => {
    const resEmp=await Employee.restore({
        where: {
          id: 2,
        },
    });
    res.status(200).json(resEmp)
}

const restoreAllEmployee = async (req,res) => {
    const resEmp=await Employee.restore();
    res.status(200).json(resEmp)
}

module.exports={
    getEmployees,
    getEmployeesWithDeleted,
    deleteEmployee,
    forceDeleteEmployee,
    restoreEmployee,
    restoreAllEmployee
}