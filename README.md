# sequelize-test

bash cli:
node src/server.js --listM
node src/server.js --addM --title "Star Wars" --actor "Vader"
node src/server.js --addM --title "Star Trek" --actor "Spock"
node src/server.js --deleteM --title "Star Wars"
node src/server.js --deleteM --title "Star Trek"
node src/server.js --updateM --title "Star Wars" --actor "Vader"
node src/server.js --updateM --title "Star Wars" --actor "Solo"
node src/server.js --findM --title "Star Wars"

node src/server.js --listD
node src/server.js --addD --name "George Lucas" --title "Star Wars"
node src/server.js --addD --name "Irvin Kershner" --title "Empire"
node src/server.js --deleteD --name "George Lucas"
node src/server.js --findD --name "George Lucas"
