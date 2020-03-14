/*
we can not iterate object value using for of loop 
to solve this problem we need to use Object.keys / Oject.entries method 
*/

let employee={
    name:'alkesh',
    age:'25',
     work(){
        console.log('Loves');
    }
}
console.log('----------------Printing using  for in loop------------------')
for (let key in employee) {
    console.log(key,employee[key]);
}
console.log('----------------Printing using  for of object.keys loop------------------')

for (let iterator of Object.keys(employee)) {
    console.log(iterator,employee[iterator]);

}

console.log('----------------Printing using  for of object.entries loop------------------')
for (let iterator of Object.entries(employee)) {
    console.log(iterator);

}
console.log('----------------Checking if property available in object ------------------')

if('age1' in employee)
{
    console.log('age present');
}
else
    console.log('age1 absent');
