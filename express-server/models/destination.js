module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "destination",
        {
            customerName: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            customerContact: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            postcode: {
                type: DataTypes.STRING(6),
                allowNull: false,
            },
            roadAddress: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            jibunAddress1: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            jibunAddress2: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            extraAddress: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            addressOwner: {
                type: DataTypes.INTEGER(),
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
};
