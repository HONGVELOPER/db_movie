module.exports = function(sequelize, DataTypes) {
    const movie = sequelize.define('M_MOVIE', {
        M_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        M_CODE: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        M_CATEGORY: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        M_DIRECTOR: {
            type:DataTypes.STRING(30),
            allowNull: false,
        },
        M_AGE_LIMIT: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        M_RELEASE_DATE: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        M_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        M_MOD_DT: {
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
        tableName: 'M_MOVIE',
        timestamps: false,
    })
    return movie
}