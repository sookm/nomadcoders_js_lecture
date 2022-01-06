// #2.3 const and let
console.log("lalala")
//send message to the console. 
//=> you can put "numbers" and "strings".
//the value in the (). the role of print something.
//you can use single quote.

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);
//Be Lazy!
//to save or hold a value, create a valuable 
//constnat means Nonchaging 
const a = 5 ;
// a holds vaules 5
console.log(a + 2);
console.log(a * 2);
console.log(a / 2);
const b = 2;
//const b = "2";
//this is not a number. it is text

console.log(a + b);
console.log(a * b);
console.log(a / b);
//so now you can change only two times.

//const myName = "turi";
const veryLongVaribleName = 0;
//**this is called <camelCase>
//cf. it is called snake_case on python 
let myName = "turi";

console.log("hello, " + myName + "!");

//**Javascript has two ways of creating a valuable
//-one way is using "const'
//-the other way is using "let"

//let a = 5;
//let b = 2;
//let myName = "turi";

//차이점은 const는 constant(상수),can NOT CHANGED
//but sometimes you want to change a valuable 
//or sometimes you want to Update or you dont 

//** let is for creation 
myName = "turituri";
//**not doing let anymore 
//**let is for when you want to create a NEW ONE.
console.log("hello, " + myName + "!");

//=>"let" means it "could be updated" somewhere in this program.

//**everybody uses "const" "by default". **
//and then if you wnat to Update, use let 

//"var" works but it can NOT let us to lock some values.
//vars don't have any of the rules. 
//**  */=> "Never Use Var"

// #2.4 Booleans
// data type - number, string
// another data type that you can save inside a variable
// -> Boolean -> true and false 

const amIFat = false;
console.log(amIFat);
// * when you use Booleans?
// f.e) the users logged in? -> true or false 
//      is the video playing? -> true or false
//      is the website loading? -> true or false

// *Null
//there are some datatypes that are Non-existing, 
//that are Non-defined, or that are Nothing on Javascript
//one is Null means nothing and there is nothing there
// Null is different from false. 
//**false has a value. **Null is that there is nothing here. 


// *undefined
// the variable is created and is on the memory. 
// and the computer is aware of the variable.
// But it does NOT have A Value.
let something;  
//createing something Variable
//but Not giving it any Values
//=> A variable exists. but is Not Defined.
//=> It Exists on the memory of the computer.
//   there is a space. but is Not Defined.

console.log(something, amIFat); // 
// > undefined null  => they are different 
// undefined is a type.

//**Null never happens Automatically.
// Null is something that happens when we want to make sure 
//that somethig doesn't exist in our variables.
// Telling Javascript that this value is Nothing literally.
