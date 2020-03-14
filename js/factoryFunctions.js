// factory functions are used to produce object with dynamic value (constructor object)


function circleObject(rad)
{
    let circle={
        radius:rad,

        draw(){
            console.log('Draw circle of '+ rad + ' radius');
        }
    }
    return circle;
}


let c1=circleObject(6);
console.log(c1.radius);
c1.draw();