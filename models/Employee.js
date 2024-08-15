const { gzipSync, gunzipSync } = require('zlib');
module.exports = (sequelize,DataTypes,Model) => {
    
    class Employee extends Model {}
    
    Employee.init(
      {
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
            isAlpha:true
          }
        },
        last_name: {
          type:DataTypes.STRING,
          validate:{
            isAlpha:true
          }
        },
        email: {
          type:DataTypes.STRING,
          validate:{
            isEmail:true
          }
        },
        salary: DataTypes.STRING,
        password: {
          type:DataTypes.STRING,
        },
    },
    {
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  )
  return Employee;
}