const { DataTypes } = require("sequelize");
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
	//
	// check if this works
	//
	// movie_id: { type: INTEGER },
});

Movie.hasOne(Director);
Director.belongsTo(Movie, {
	foreignKey: movie_id,
});

module.exports = Movie;
