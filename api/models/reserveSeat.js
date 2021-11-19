module.exports = function(sequelize, DataTypes) {
    const reserveSeat = sequelize.define('M_RESERVE_SEAT', {
        MRS_CODE: {
            type: DataTypes.INTEGER(30),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        MRS_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        MRS_MOD_DT: {
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
        tableName: 'M_RESERVE_SEAT',
        timestamps: false,
    })
    reserveSeat.associate = function(models) {
        reserveSeat.belongsTo(models.M_SEAT, {
            foreignKey: 'MS_CODE',
            onDelete: 'cascade',
        })
        reserveSeat.belongsTo(models.M_RESERVE_INFO, {
            foreignKey: 'MRI_CODE',
            onDelete: 'cascade',
        })
        reserveSeat.belongsTo(models.M_THEATER, {
            foreignKey: 'MT_CODE',
            onDelete: 'cascade',
        })
    }
    return reserveSeat
}