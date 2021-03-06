const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Explore extends Model {}

Explore.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://static.turbosquid.com/Preview/001325/331/VU/_DHQ.jpg"
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "description"
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Explore'
    }
);

module.exports = Explore;