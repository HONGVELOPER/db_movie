module.exports = function (sequelize, DataTypes) {
  const commute = sequelize.define(
    "UC_COMMUTE",
    {
      UC_CODE: {
        type: DataTypes.INTEGER(30),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      UC_NAME: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      UC_IN: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      UC_OUT: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      UC_CRET_DT: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      UC_MOD_DT: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
      dateStrings: true,
      typeCast: true,
      freezeTableName: true,
      tableName: "UC_COMMUTE",
      timestamps: false,
    }
  );
  return commute;
};
