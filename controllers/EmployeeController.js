const db=require('../models')
const Employee=db.employee;

const getEmployees = async (req,res) => {
    const resEmp=await Employee.findAll({});
    res.status(200).json(resEmp)
}

const getEmployee = async (req,res) => {
    const resEmp=await Employee.findOne({
        where:{id:req.params.id}
    });
    res.status(200).json(resEmp)
}

const addEmployee = async (req,res) => {
    const data=req.body;
    if(data.length>1){
        var resEmp=await Employee.bulkCreate(req.body);
    }
    else{
        var resEmp=await Employee.create(req.body);
    }
    
    res.status(200).json(resEmp)
}

const updateEmployee = async (req,res) => {
    const data=req.body;

    const resEmp=await Employee.update(data,{
        where:{id:req.params.id}
    });
    
    res.status(200).json(resEmp)
}

const deleteEmployee = async (req,res) => {
    const resEmp=await Employee.destroy({
        where:{id:req.params.id}
    });
    res.status(200).json(resEmp)
}

module.exports={
    getEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}