const { QueryTypes } = require('sequelize');
const db=require('../models')
const Employee=db.employee;
const Skill=db.skill;

const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll({
        include: Skill,
    });
    res.status(200).json(resEmp)
}

const getSkills = async (req,res) => {
    const resEmp=await Skill.findAll({
        include: Employee,
    });
    res.status(200).json(resEmp)
}

module.exports={
    getEmployees,
    getSkills
}