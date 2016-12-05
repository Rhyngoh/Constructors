function someFunction(){
	console.log("Fuction stuffs");
}
function logTheStuff(someString, someFunction){
	//someFunction = new AnotherFunction();
	console.log(someString);
	someFunction();
}
logTheStuff(process.argv[2], someFunction);
function booleanTheStuff(someBoolean, someFunction){
	console.log(someBoolean);
	if(someBoolean){
		someFunction();
	} else{
		return;
	}
}
booleanTheStuff(0,someFunction);
function wrapTheStuff(someValue, someFunction){
	return function(){
		return someFunction(someValue);
	}
}
var a = function(){
	//do stuffs
}
/*var AnotherFunction = function(){
	console.log("Da function was run bro");
}*/