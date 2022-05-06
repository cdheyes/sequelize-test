const Director = require("./directorTable");

exports.addDirector = async (DirectorObj) => {
	try {
		await Director.create(DirectorObj);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteDirector = async (DirectorObj) => {
	try {
		await Director.destroy({
			where: { name: DirectorObj.name },
		});
	} catch (error) {
		console.log(error);
	}
};

exports.updateDirector = async (DirectorObj) => {
	try {
		await Director.update(
			{ title: DirectorObj.title },
			{ where: { name: DirectorObj.name } }
		);
	} catch (error) {
		console.log(error);
	}
};

exports.listDirectors = async () => {
	try {
		return await Director.findAll();
	} catch (error) {
		console.log(error);
	}
};

exports.findDirector = async (DirectorObj) => {
	try {
		let found = await Director.findOne({
			where: { name: DirectorObj.name },
		});
		if (found === null) {
			console.log("Not found!");
		} else {
			console.log(DirectorObj.name + " is in the DB!");
		}
	} catch (error) {
		console.log(error);
	}
};
