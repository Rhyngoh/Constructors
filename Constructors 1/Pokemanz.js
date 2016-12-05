// dependency for inquirer npm package
var inquirer = require("inquirer");
var killCount = 0;
// constructor function used to create programmers objects
function PokemansTrainers(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
  this.age + "\nLanguages: " + this.language);
};
function thePrompt(){
  // runs inquirer and asks the user a series of questions whose replies are
  // stored within the variable answers inside of the .then statement.
  inquirer.prompt([
    {
      name: "name",
      message: "What is your name?"
    }, {
      name: "position",
      message: "What is your current position?"
    }, {
      name: "age",
      message: "How old are you?"
    }, {
      name: "language",
      message: "What is your favorite programming language?"
    }
  ]).then(function(answers) {
    // initializes the variable newguy to be a programmer object which will take
    // in all of the user's answers to the questions above
    //var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
    // printInfo method is run to show that the newguy object was successfully created and filled
    //newGuy.printInfo();
    //var programmerArray = [];
    var jo = new Programmer(answers.name, answers.position, answers.age, answers.language);
    programmerArray.push(jo);
    //console.log(jo);
    programmerArray.forEach(function(jo){
      jo.printInfo();
      console.log("--------------");
    }); //foreach
    again();
  });
}
function again(){
  inquirer.prompt([
  {
    type: "confirm",
      message: "Add another programmer?",
      name: "moreProgrammers",
      default: true
  }
    ]).then(function(user){
      if(user.moreProgrammers){
        thePrompt();
      } else{
        console.log("No more programmers to be added");
        return;
      }
    });
}
thePrompt();