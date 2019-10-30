'use strict';
module.exports = (sequelize, DataTypes) => {
  const competency = sequelize.define('competency', {
    description_en: DataTypes.STRING,
    description_fr: DataTypes.STRING
  }, {});
  competency.associate = function(models) {
    // associations can be defined here
  };
  return competency;
};