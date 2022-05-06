const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		primaryKey: true,
	},
	actor: {
		type: DataTypes.STRING,
		defaultValue: "Not specified",
	},
});

// Movie.hasOne(Director);
// Director.belongsTo(Movie, {
// 	foreignKey: "title",
// });

module.exports = Movie;
