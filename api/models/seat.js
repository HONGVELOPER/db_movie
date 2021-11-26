module.exports = function(sequelize, DataTypes) {
    const seat = sequelize.define('M_SEAT', {
        MS_CODE: {
            type: DataTypes.INTEGER(30),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        MS_ROW: {
            type: DataTypes.STRING(1),
            allowNull: false,
        },
        MS_COL: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
        },
        MS_DISTANCE: {
            type: DataTypes.STRING(5),
            allowNull: false,
        },
        MS_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        MS_MOD_DT: {
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
        tableName: 'M_SEAT',
        timestamps: false,
    })
    seat.associate = function(models) {
        seat.belongsTo(models.M_THEATER, {
            foreignKey: 'MT_CODE',
            onDelete: 'cascade',
        })
    }
    return seat
}