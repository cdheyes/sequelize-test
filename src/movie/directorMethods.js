const Director = require("./directorTable");

exports.addDirector = async (directorObj) => {
	try {
		await Director.create(directorObj);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteDirector = async (directorObj) => {
	try {
		await Director.destroy({
			where: { name: directorObj.name },
		});
	} catch (error) {
		console.log(error);
	}
};

exports.updateDirector = async (directorObj) => {
	try {
		await Director.update(
			{ title: directorObj.title },
			{ where: { name: directorObj.name } }
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

exports.findDirector = async (directorObj) => {
	try {
		let found = await Director.findOne({
			where: { name: directorObj.name },
		});
		if (found === null) {
			console.log("Not found!");
		} else {
			console.log(directorObj.name + " is in the DB!");
		}
	} catch (error) {
		console.log(error);
	}
};
