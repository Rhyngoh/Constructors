var Student = require("./student.js");
var Class = function(profName, roomNumber){
	this.students = [];
	this.numberOfStudents = 0;
	this.profName = profName;
	this.roomNumber = roomNumber;
	this.addStudent = function(nom, fov, gov){
		this.students.push(new Student(nom, fov, gov));
		this.numberOfStudents = this.students.length;
	};
};
var aPlusClass = new Class("jimBean", 2.214);
aPlusClass.addStudent("Steve", "Overwatch", "4.0");
aPlusClass.addStudent("Ryan", "Board Games", "2.0");
aPlusClass.addStudent("Niraj", "Javascript", "3.0");
console.log("Students", aPlusClass.students);
console.log("Prof Name", aPlusClass.profName);
console.log("Room Number", aPlusClass.roomNumber);
console.log(aPlusClass);