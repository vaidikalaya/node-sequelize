
const { Sequelize,DataTypes,Model } = require('sequelize');

const sequelize = new Sequelize('test_employees', 'root', '', {
    host: 'localhost',
    logging:false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.employee=require('./Employee')(sequelize,DataTypes,Model)
db.employee_address=require('./EmployeeAddress')(sequelize,DataTypes)
db.skill=require('./Skill')(sequelize,DataTypes,Model)
db.employeeSkill=require('./EmployeeSkill')(sequelize,DataTypes,Model,db.skill,db.employee)

//here we give direct table through:employee_skills
db.employee.belongsToMany(db.skill,{through: db.employeeSkill,foreignKey:'skill_id',timestamps: false})
db.skill.belongsToMany(db.employee,{through: db.employeeSkill,foreignKey:'employee_id',timestamps: false})

module.exports=db;