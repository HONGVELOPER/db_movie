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
            // primaryKey: true,
            // autoIncrement: true,
        },
        M_NAME: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        M_RATE: { // 평점
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        M_GENRE: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        M_BOOKING_RATE: { // 예매율
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        M_RELEASE_DATE: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        M_RUNNIG_TIME: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        M_TOTAL_ATTEND: { // 누적 관객수
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        M_AGE_LIMIT: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        M_STORY: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        M_DIRECTOR: {
            type:DataTypes.STRING(50),
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