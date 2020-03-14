function callme()
    {
        alert('You clicked me Alkesh');
    }
console.log("Alkesh");

//Data Types
/*
1.Premitive
    ->string
    ->number (both int and double)
    ->boolean
    ->undefined
    ->null
2.Reference
    ->object
    ->arrays
    ->function
*/
console.log('---------------------Data Types---------------------------');
var imString="Im Alkesh Sakhare";
var imNumber='9';
var imBoolean=true;
var imUndefined;
var imNull=null;
console.log("imString= "+imString);
console.log("typeof imString= "+typeof imString);
console.log("imNumber= "+imNumber);
console.log("typeof imNumber= "+typeof imNumber);
console.log("imBoolean= "+imBoolean);
console.log("typeof imBoolean= "+typeof imBoolean);
console.log("imUndefined= "+imUndefined);
console.log("typeof imUndefined= "+typeof imUndefined);
console.log("imNull= "+imNull);
console.log("typeof imNull= "+typeof imNull);


/*Type casting -- variable datatype will be autochange if we change data type value
*/
console.log("------------------------------Type Caseting example----------------------");
let a='String';
console.log("before typecast value of a= "+a);
a=9; 
console.log("after typecast value of a= "+a);




//
console.log('------------------------Object concept--------------------');
let user={
    name:'Alkesh',
    age:25,
    gender:'M'
};

console.log("Printing object User "+user);
console.log(user);
//calling object by dot notation
console.log('---------------------User object by dot notation------------------------');

console.log('user age: '+user.age);
console.log('user name: '+user.name);
//calling object by bracket notation

console.log('---------------------User object printing by bracket--------------------');
console.log('user age: '+user['age']);
console.log('user name: '+user['name']);


console.log('------------------------------Arrays concept-----------------------------');
let arrayex=[1,2,3,4,5];
console.log("printing array arrayex[] : " + arrayex);

let arrayString=['Java', 'JavaScript'];
console.log(arrayString);
arrayString[1]="JS";
console.log(arrayString);
arrayString[2]="Python";
console.log(arrayString);
arrayString[3]="";
console.log(arrayString);
console.log(arrayString[2]);
console.log(arrayString[3]);
console.log(arrayString[4]);


console.log('--------------------------------function concept---------------------');

function printObje(name,age)
{
    console.log("Name is "+name +" "+ "& Age is "+ age);
}

printObje('Alkesh', 3);
printObje('Alkesh','');
printObje('Alkesh');
printObje();
function getSqrt(num1)
{
    return Math.sqrt(num1);
}

console.log(getSqrt(9));