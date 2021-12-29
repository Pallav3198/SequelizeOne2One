'use strict';
const {
  Model
} = require('sequelize');
const userdetails = require('./userdetails');
module.exports = (sequelize, DataTypes) => {
  class credentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  credentials.init({
    email:{
    type:DataTypes.STRING,
    allowNull:false
  },
    userId:{
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:"userDetails",
        },
        key:"id"
      },
      allowNull:false,
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'credentials',
  });
  Credential.associate = (models)=>{

  }
  return credentials;
};