const { gzipSync, gunzipSync } = require('zlib');
module.exports = (sequelize,DataTypes,Model) => {
    
    class Employee extends Model {}
    
    Employee.init(
      {
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        salary: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  )
  return Employee;
}