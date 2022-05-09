// movie CRUD operations work OK
// director CRUD operations DO NOT work

const yargs = require("yargs");
const { sequelize } = require("./db/connection");

const Director = require("./movie/directorTable");
const Movie = require("./movie/movieTable");

// not sure if this is correct?

Movie.hasOne(Director);
Director.belongsTo(Movie, {
	foreignKey: Director.title,
});

//imports for CRUD functions
const {
	addMovie,
	deleteMovie,
	updateMovie,
	listMovies,
	findMovie,
} = require("./movie/movieMethods");

const {
	addDirector,
	deleteDirector,
	updateDirector,
	listDirectors,
	findDirector,
} = require("./movie/directorMethods");

const app = async (yargsObj) => {
	try {
		await sequelize.sync();
		//
		// movie CRUD operations work OK
		//
		if (yargsObj.addM) {
			//add movie to database
			await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
		} else if (yargsObj.listM) {
			//list all movies
			console.log(await listMovies());
		} else if (yargsObj.updateM) {
			//update one movie
			await updateMovie({ title: yargsObj.title, actor: yargsObj.actor });
		} else if (yargsObj.deleteM) {
			//delete one movie
			await deleteMovie({ title: yargsObj.title });
		} else if (yargsObj.findM) {
			//finds a movie
			await findMovie({ title: yargsObj.title });
		}
		//
		// director CRUD
		// WHY IT NO WORK???
		//
		else if (yargsObj.addD) {
			//add director to database
			await addDirector({ name: yargsObj.name, title: yargsObj.title });
		} else if (yargsObj.listD) {
			//list all directors
			console.log(await listDirectors());
		} else if (yargsObj.updateD) {
			//update one director
			await updateDirector({ name: yargsObj.name, title: yargsObj.title });
		} else if (yargsObj.deleteD) {
			//delete one director
			await deleteDirector({ name: yargsObj.name });
		} else if (yargsObj.findD) {
			//finds a director
			await findDirector({ name: yargsObj.name });
		} else {
			console.log("Incorrect command");
		}
	} catch (error) {
		console.log(error);
	}
};

app(yargs.argv);
