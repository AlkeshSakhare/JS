//Dynamic Object: We can add or remove propery from object

let car={
    seat:4,
    drive()
    {
        console.log('can drive front back');
    }
}

console.log(car);
console.log('------------------adding traveller property------------------')
car.traveller=6;
console.log(car);
console.log('------------------adding travel method property------------------')
car.travel=function(){
    console.log('Travelling in car');
};
console.log(car);
console.log('------------------deleting traveller property------------------')
delete car.traveller;
console.log(car);
console.log('------------------deleting travel property------------------')
delete car.travel;
console.log(car);

