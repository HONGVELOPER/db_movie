module.exports = function(sequelize, DataTypes) {
    const reserveInfo = sequelize.define('M_RESERVE_INFO', {
        MRI_CODE: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        MRI_EMAIL: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        MRI_ReserveDate: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        MRI_ReserveCancel: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        MRI_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        MRI_MOD_DT: {
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
        tableName: 'M_RESERVE_INFO',
        timestamps: false,
    })
    reserveInfo.associate = function(models) {
        reserveInfo.belongsTo(models.M_THEATER, {
            foreignKey: 'MT_CODE',
            onDelete: 'cascade',
        })
    }
    return reserveInfo
}