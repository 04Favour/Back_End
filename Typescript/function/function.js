// function addNumbers() {
// }
// const subNumbers=()=> {
// }
// const divNumbers = ((name,callback)=>{
// } callback());
// const newArrow = (c:number,b:number)=> {
//     return c + b
// }
// console.log(newArrow(2,5))
var addThreeNumbers = function (a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
console.log(addThreeNumbers(2, 5));
var pi = function (radius) {
    return Math.PI * radius;
};
console.log(pi(5));
var hello = function (name) {
    // return `Hello ${name}, welcome to the world of typescript!`
    return 'Hello ' + name + ', welcome to the world of typescript!';
};
console.log(hello('Favour'));
var user = function (userDetails) {
    return "Hi! ".concat(userDetails.firstname, " ").concat(userDetails.lastname, ". Do have a nice trip!");
};
var DB = {
    firstname: 'Favour',
    lastname: 'Mfon'
};
console.log(user(DB));
