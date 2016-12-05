/*var inquirer = require("inquirer");
inquirer.prompt([
{
	type: "list",
		message: "Do you want a doggo or a catto",
		choices: ["doggo", "catto"],
		name: "pet"
}
]).then(function(chosenPet){
	console.log(JSON.stringify(chosenPet, null, 2));
	console.log(chosenPet.name);
	if(chosenPet.pet === "doggo"){
		console.log("You chose doggo!");
		inquirer.prompt([
			{
				type: "list",
					message: "What do you want your doggo to do?",
					choices: ["feed", "sleep", "play", "bark", "goOutside", "goInside"],
					name: "action"
			}
			]).then(function(user){
				actions();
			});
	}
	if(chosenPet.pet === "catto"){
		console.log("You chose catto!");
		inquirer.prompt([
			{
				type: "list",
					message: "What do you want your catto to do?",
					choices: ["feed", "sleep", "play", "meow", "destroyFurniture", "buyNewFurniture"],
					name: "action"
			}
			]).then(function(user){
				actions();
			})
	}
});
function actions(){*/
var DigitalPal = function(){
	this.hungry = false;
	this.sleepy = false;
	this.bored = false;
	this.age = 0;
	this.feed = function(){
		if(this.hungry === true){
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full.");
		}
	}
	this.sleep = function(){
		if(this.sleepy === true){
			console.log("Zzzzzzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else {
			console.log("No way! I'm not tired!");
		}
	}
	this.play = function(){
		if(this.bored === true){
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		} else {
			console.log("Not right now. Later?");
		}
	}
	this.increaseAge = function(){
		this.age ++;
		console.log("Happy Birthday to me! I am " + this.age + " years old!");
	}
};
this.dog = new DigitalPal();
this.dog.outside = false;
this.dog.bark = function(){
	console.log("Woof! Woof!");
};
this.dog.goOutside = function(){
	if(this.outside === false){
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		this.bark();
	} else {
		console.log("We're already outside though...");
	}
};
this.dog.goInside = function(){
	if(this.outside === true){
		console.log("Do we have to? Fine...");
		this.outside = false;
	} else {
		console.log("I'm already inside...");
	}
};
this.cat = new DigitalPal();
this.cat.houseCondition = 100;
this.cat.meow = function(){
	console.log("Meow! Meow!");
};
this.cat.destroyFurniture = function(){
	if(this.houseCondition === 0){
		return false;
	} else {
		this.houseCondition -= 10;
		console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
		this.bored = false;
		this.sleepy = true;
		return true;
	}
};
this.cat.buyNewFurniture = function(){
	this.houseCondition += 50;
	console.log("Are you sure about that?");
};
//}
var animal = process.argv[2];
var method = process.argv[3];

this[animal][method]();
//node tamagatchi.js cat destroyFurniture