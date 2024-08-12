const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Employees = sequelize.define(
  'Employees',
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.STRING,
    },
  },
  {
    //Other model options
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports=Employees;