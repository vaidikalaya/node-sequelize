const db=require('../models')
const Employee=db.employee;

const addEmployee = async (req,res) => {
    const resEmp=Employee.build({
        first_name:'Prabhakar',
        last_name:'Mishra',
        email:'prabhakar@gmail.com',
        salary:20000
    });
    await resEmp.save();
    const data=resEmp.toJSON();
    res.status(200).json(data)
}

const addEmployee2 = async (req,res) => {
    const resEmp=await Employee.create({
        first_name:'Viraj',
        last_name:'Mishra',
        email:'viraj@gmail.com',
        salary:20000
    });
    const data=resEmp.toJSON();
    res.status(200).json(data)
}

module.exports={addEmployee,addEmployee2}