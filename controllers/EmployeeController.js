const db=require('../models')
const Employee=db.employee;
const Address=db.employee_address;


const createEmployee = async (req, res) => {

    const t = await db.sequelize.transaction();

    try{
        const resEmp = await Employee.create({
            first_name:'Raghab2',
            last_name:'Sharma',
            email:'raju@gmail.com',
            salary:10000,
            password:'pass123'
        },{ transaction: t });

        if(resEmp){
            const resAddress=await Address.create({
                'employee_id':resEmp.id,
                'state':'Uttarakhand',
                'district':'Dehradun',
                'city':'Dehradun',
                'pin_code':null
            },{ transaction: t })
        }
        await t.commit();
        res.status(200).json(resEmp);
    }
    catch(e){
        await t.rollback();
        res.status(200).json(e);
    }

}

module.exports={
    createEmployee,
}