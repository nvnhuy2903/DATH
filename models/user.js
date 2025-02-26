const DataTypes = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
    // Model attributes are defined here
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Tự động tăng
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'USER',
    timestamps: false,
});

module.exports = User;