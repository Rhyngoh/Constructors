var fs = require("fs");
//function Character (name="default name", attack = 1, health =1, speed =1) for default values
//variableName = new Character();
function Character (name, profession, gender, age, strength, hp){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hp = hp;
	this.isAlive = function(){
		if(this.hp > 0){
			console.log(this.name + " has " + this.hp + "hp");
		} else{
			console.log(this.hp + "hp. " + this.name + " is dead");
		}
	}
}
var patrick = new Character("Patrick", "Starfish", "Male", 12, 3, 30);
var dolores = new Character("Dolores", "Survivor", "Female", 30, 5, 100);
var steve = new Character("Steve", "Celtic Swordsman", "Male", 26, 20, 50);
var god = new Character("God", "God", "Male", 9001, 99999, 99999);
//add new properties to objects: patrick.isAGod = true;
console.log(patrick);
console.log(steve);
console.log(dolores);
console.log(god);
function attack(firstPlayer, secondPlayer){
	secondPlayer.hp -= firstPlayer.strength;
	console.log(secondPlayer.name + " has " + secondPlayer.hp + "hp left.");
	firstPlayer.hp -= secondPlayer.strength;
	console.log(firstPlayer.name + " has " + firstPlayer.hp + "hp left.");
	if(secondPlayer.hp < 1){
		console.log(secondPlayer.name + " is killed.");
		return;
	} if(firstPlayer.hp < 1){
		console.log(firstPlayer.name + " is killed.");
		return;
	} else {
		attack(firstPlayer, secondPlayer);
	}
	firstPlayer.isAlive();
}
attack(steve, patrick);