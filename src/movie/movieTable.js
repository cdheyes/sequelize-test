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

Movie.hasOne(Director);
Director.belongsTo(Movie, {
	foreignKey: "title",
});

// sequelize
// 	.sync({ alter: true })
// 	.then(() => {
// 		//working with updated table
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

module.exports = Director;
module.exports = Movie;
