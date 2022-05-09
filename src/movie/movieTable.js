const { DataTypes, INTEGER } = require("sequelize");
const { sequelize } = require("../db/connection");

const Director = require("./directorTable");

const Movie = sequelize.define("Movie", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	actor: {
		type: DataTypes.STRING,
		defaultValue: "Not specified",
	},
});

// Movie.hasOne(Director);
// Director.belongsTo(Movie, {
// 	foreignKey: title,
// });

module.exports = Movie;
