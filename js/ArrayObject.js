/*
manipulating primitive data in Arrays
*/

var arrayEx=[0,1,2,3,4,5,6,7,8,9];
console.log(arrayEx);

//print all element
console.log('print all element');
for (const key in arrayEx) {
    console.log(arrayEx[key]);
        
}

// find position of element indexOf(5)
console.log('find position of element indexOf(5)',arrayEx.indexOf(5));

//add element at the start 
arrayEx.unshift(-1);
console.log('add element at the start ',arrayEx);

//add element at the end
arrayEx.push(10);
console.log('add element at the end ',arrayEx);

//remove element splice(StartOfElement,NoOfElementToBeRemoved)
arrayEx.splice(5,5);
console.log('remove 5 element from 5th position',arrayEx);



/*
finding refernce type in arrays
*/

var arrayRef=[
    {id:1,name:'Alkesh'},
    {id:2,name:'A'},
    {id:3,name:'Al'},
    {id:4,name:'Alk'},
    {id:5,name:'Alke'},
    {id:5,name:'Alkes'},
    {id:5,name:'Alkesh'}
];

var isName=arrayRef.find(function(ref){
   return ref.name==='Alkesh';
});
var isName1=arrayRef.findIndex(function(ref){
    return ref.name==='Alkesh';
 });
console.log('Element Found',isName);
console.log('Element Index Found',isName1);