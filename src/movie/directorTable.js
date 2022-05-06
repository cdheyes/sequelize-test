const { DataTypes, INTEGER } = require("sequelize");
const { sequelize } = require("../db/connection");

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
	//
	// check if this works
	//
	// movie_id: { type: INTEGER },
});

module.exports = Director;
