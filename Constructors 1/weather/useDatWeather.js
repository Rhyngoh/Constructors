var inquirer = require("inquirer");
var weather = require('weather-js');
var fs = require("fs");
var Weather = require("./weatherStuff.js");
inquirer.prompt([
{
	type: "list",
	name: "useradmin",
	message: "Are you a user or admin?",
	choices: ["user", "admin"]
}]).then(function(response){
	if(response.useradmin === "user"){
		inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your name?"
		},
		{
			type: "input",
			name: "location",
			message: "What is your location?"
		}
		]).then(function(user){
			var weatherStuffs = new Weather(user.name, user.location);
			var weatherString = "Name : " + weatherStuffs.name + " | Location: " + weatherStuffs.location + " | Date Added: " + weatherStuffs.date;
			weather.find({search: weatherStuffs.location, degreeType: 'F'}, function(err, result) {
			  if(err) console.log(err);
			 
			  console.log(JSON.stringify(result, null, 2));
			});
			fs.appendFile("weatherUsers.txt", weatherString + "\n");
		});
	}
	if(response.useradmin == "admin"){
		fs.readFile("./weatherUsers.txt", "utf8", function(err, data){
			console.log(data);
		});
	}
});