module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "user",
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            userID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            birth: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            isAdult: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
        },
        {
            timestamps: true,
        }
    );
};
