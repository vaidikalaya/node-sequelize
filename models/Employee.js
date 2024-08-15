const { gzipSync, gunzipSync } = require('zlib');
module.exports = (sequelize,DataTypes,Model) => {
    
    class Employee extends Model {}
    
    Employee.init(
      {
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
          //getter
          get(){
            const firstName=this.getDataValue('first_name');
            return firstName?firstName.toUpperCase():null;
          }
        },
        last_name: {
          type:DataTypes.STRING,
          //getter
          get(){
            const lastName=this.getDataValue('last_name');
            return lastName?lastName.toUpperCase():null;
          }
        },
        email: DataTypes.STRING,
        salary: DataTypes.STRING,
        password: {
          type:DataTypes.STRING,
          //setter
          set(value) {
            const gzippedBuffer = gzipSync(value);
            this.setDataValue('password', gzippedBuffer.toString('base64'));
          },
        },
        //virtuals
        full_name:{
          type: DataTypes.VIRTUAL,
          get() {
            return `${this.first_name} ${this.last_name}`;
          },
        }
    },
    {
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  )
  return Employee;
}