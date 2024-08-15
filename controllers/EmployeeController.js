const { QueryTypes } = require('sequelize');
const db=require('../models')
const Employee=db.employee;

const getEmployees1 = async (req,res) => {
    const resEmp=await db.sequelize.query("SELECT * FROM employees");
    res.status(200).json(resEmp)
}

const getEmployees2 = async (req,res) => {
    const resEmp=await db.sequelize.query(
        "SELECT * FROM employees",
        {
            type:QueryTypes.SELECT,
            model:Employee,
            mapToModel:true
        }
    );
    res.status(200).json(resEmp)
}

const getEmployees3 = async (req,res) => {
    const resEmp=await db.sequelize.query(
        "SELECT * FROM employees where first_name=?",
        {
            replacements:['Viraj'],
            type:QueryTypes.SELECT
        }
    );
    res.status(200).json(resEmp)
}

const getEmployees4 = async (req,res) => {
    const resEmp=await db.sequelize.query(
        "SELECT * FROM employees where id=:id",
        {
            replacements:{id:1},
            type:QueryTypes.SELECT
        }
    );
    res.status(200).json(resEmp)
}

const getEmployees5 = async (req,res) => {
    const resEmp=await db.sequelize.query(
        "SELECT * FROM employees where id IN(:id)",
        {
            replacements:{id:[1,2,3]},
            type:QueryTypes.SELECT
        }
    );
    res.status(200).json(resEmp)
}

const getEmployees6 = async (req,res) => {
    const resEmp=await db.sequelize.query(
        "SELECT * FROM employees where id=$id",
        {
            bind:{id:1},
            type:QueryTypes.SELECT
        }
    );
    res.status(200).json(resEmp)
}

const getEmployees7 = async (req,res) => {
    const resEmp=await db.sequelize.query(
        "SELECT * FROM employees where first_name=$firstName and salary>$salary",
        {
            bind:{firstName:'Viraj',salary:10000},
            type:QueryTypes.SELECT
        }
    );
    res.status(200).json(resEmp)
}

module.exports={
    getEmployees1,
    getEmployees2,
    getEmployees3,
    getEmployees4,
    getEmployees5,
    getEmployees6,
    getEmployees7
}