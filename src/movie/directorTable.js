const { DataTypes, INTEGER } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = require("./movieTable");

const Director = sequelize.define("Director", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Director;
