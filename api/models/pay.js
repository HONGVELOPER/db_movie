module.exports = function (sequelize, DataTypes) {
    const paymentInfo = sequelize.define("M_PAYMENT", {
        MP_CODE: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        MP_TYPE: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        MP_EMAIL: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        MP_PRICE: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        MP_RESERVE_NUM: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        MP_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        MP_MOD_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
    }, {
        charset: "utf8",
        collate: "utf8_unicode_ci",
        dateStrings: true,
        typeCast: true,
        freezeTableName: true,
        tableName: "M_PAYMENT",
        timestamps: false,
    })
    return paymentInfo
};
