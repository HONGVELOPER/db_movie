module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define('M_USER', {
        U_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        U_EMAIL: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        U_PASSWORD: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        U_NAME: {
            type:DataTypes.STRING(50),
            allowNull: false,
        },
        U_PH_NUM: {
            type: DataTypes.STRING(13),
            allowNull: false,
        },
        U_BIRTH: {
            type: DataTypes.STRING(6),
            allowNull: false,
        },
        U_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        U_MOD_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        dateStrings: true,
        typeCast: true,
        freezeTableName: true,
        tableName: 'M_USER',
        timestamps: false,
    })
    return user
}