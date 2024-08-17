module.exports = (sequelize,DataTypes,Model) => {
    
    class Skill extends Model {}
    
    Skill.init(
      {
        skill: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    },
    {
      sequelize,
      timestamps:false,
    },
  )
  return Skill;
}