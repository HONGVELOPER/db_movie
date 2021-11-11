module.exports = function(sequelize, DataTypes) {
    const theater = sequelize.define('M_THEATER', {
        MT_CODE: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        MT_FORMAT: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        MT_START_TIME: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        MT_END_TIME: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        MT_RUNNING_DATE: { // 평점
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        MT_TOTAL_SEAT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        MT_AVAIL_SEAT: { // 예매 가능 좌석
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        MT_RESERVED_SEAT: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        MT_SCREEN_SPACE: { // 몇 관인지
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        MT_SCREEN_SIZE: { // 스크린 크기
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        MT_CRET_DT: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        MT_MOD_DT: {
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
        tableName: 'M_THEATER',
        timestamps: false,
    })
    theater.associate = function(models) {
        theater.belongsTo(models.M_MOVIE, {
            foreignKey: 'M_CODE',
            onDelete: 'cascade',
        })
        theater.belongsTo(models.B_BRANCH, {
            foreignKey: 'B_CODE',
            onDelete: 'cascade'
        })
    }
    return theater
}