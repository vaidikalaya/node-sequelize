module.exports = (sequelize,DataTypes,Model,Skill,Employee) => {
    
    class EmployeeSkill extends Model {}
    
    EmployeeSkill.init(
      {
        skill_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          reference:{
            model:Skill,
            key:'id'
          }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference:{
                model:Employee,
                key:'id'
            }
        },
    },
    {
      sequelize,
      tableName: 'employee_skills',
      timestamps:false,
    },
  )
  return EmployeeSkill;
}