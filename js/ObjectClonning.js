/*
Object clonning means copying one object property into another object
There are 3 ways by which we can clone object

1.For in loop
2.Object.assign()
3. ... seperator method
*/

const emp={
    name:'Alkesh',
    age:30,
    work()
    {
        console.log('Work');
    }
};

// 1. for in loop
const newOjectByForIn={};
console.log('newOjectByForIn Before cloning emp object ', newOjectByForIn);
for (const key in emp) {
   newOjectByForIn[key]=emp[key];
}
console.log('newOjectByForIn After cloning emp object ', newOjectByForIn);

//2.Oject.assign()

const newOjectByObjetAssign= Object.assign({},emp);
console.log('newOjectByObjetAssign cloning emp object ', newOjectByObjetAssign);

//3. ... seperator method

const newObjBySeparator={...emp};
console.log('newObjBySeparator cloning emp object ', newObjBySeparator);
