/* Value Type
If we have assigned first variable  value to second variable 
and if we update the value of first variable 
then value of second variable will remain unchanged
*/

var x='Alkesh';
var y=x;
console.log('Value of y: '+y);
y='Uzma';
console.log('Value of y: '+y);



/* Reference Type
If we have assigned first object's property  to second object's property  
and if we update the value of first object's property
then value of second object's property will be same as first object's property
*/


var lovers={alkesh:'UA'};
var lovers1=lovers;
console.log('value of lovers1.alkesh: '+lovers1.alkesh);
lovers.alkesh='AU';
console.log('value of lovers1.alkesh: '+lovers1.alkesh);

