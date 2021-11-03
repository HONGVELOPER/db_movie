module.exports = function(sequelize, DataTypes) {
    const actor = sequelize.define('M_ACTOR', {
        MA_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        MA_CODE: {
            type: DataTypes.STRING(50),
            allowNull: false,
            // primaryKey: true,
            // autoIncrement: true,
        },
        MA_NAME: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        MA_AGE: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        MA_PROFILE_URL: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        MA_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        MA_MOD_DT: {
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
        tableName: 'M_ACTOR',
        timestamps: false,
    })
    actor.associate = function(models) {
        actor.belongsTo(models.M_MOVIE, {
            foreignKey: 'fk_M_ID',
            onDelete: 'cascade',
        })
    }
    return actor
}