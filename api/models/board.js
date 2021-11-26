module.exports = function(sequelize, DataTypes) {
    const board = sequelize.define('board', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Writer: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Content: { 
            type: DataTypes.TEXT,
            allowNull: true,
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        dateStrings: true,
        typeCast: true,
        freezeTableName: true,
        tableName: 'Board',
        timestamps: false,
    })
    return board
}