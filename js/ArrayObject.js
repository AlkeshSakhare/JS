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
