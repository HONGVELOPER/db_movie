module.exports = function(sequelize, DataTypes) {
    const branch = sequelize.define('B_BRANCH', {
        B_CODE: {
            type: DataTypes.INTEGER(30),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        B_NAME: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        B_NUMBER: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        B_ADDRESS: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        B_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        B_MOD_DT: {
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
        tableName: 'B_BRANCH',
        timestamps: false,
    })
    return branch
}