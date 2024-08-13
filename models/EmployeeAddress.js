module.exports = (sequelize,DataTypes) => {
    const EmployeeAddress=sequelize.define(
      'EmployeeAddress',
      {
        employee_id: DataTypes.INTEGER,
        state: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        location: DataTypes.STRING,
        pincode: DataTypes.STRING,
      },
      {
        //Other model options
        tableName: 'employee_addresses',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
  )
}