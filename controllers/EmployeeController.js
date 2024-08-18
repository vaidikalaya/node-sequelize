const db=require('../models')
const Employee=db.employee;

const getEmployees = async (req, res) => {
    const resEmp = await Employee.findAll({
        attributes: {
            include: [
                [
                    db.sequelize.literal(`
                        (
                            SELECT COUNT(*) FROM 
                            employee_addresses 
                            WHERE employee_addresses.employee_id = employee.id
                        )
                    `),
                    'total_address'
                ]
            ]
        }
    });
    res.status(200).json(resEmp);
}

module.exports={
    getEmployees,
}