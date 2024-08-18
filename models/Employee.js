'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    salary: DataTypes.STRING,
    password: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};