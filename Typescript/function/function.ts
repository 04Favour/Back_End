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

const addThreeNumbers = (a: number, b: number, c?: number) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log(addThreeNumbers(2, 5));

const pi = (radius:number)=> {
    return Math.PI * radius
}
console.log(pi(5))

const hello = (name:string)=> {
    // return `Hello ${name}, welcome to the world of typescript!`
    return 'Hello '+ name+ ', welcome to the world of typescript!'
}
console.log(hello('Favour'));

const user = (userDetails:{firstname:string, lastname:string}) => {
    return `Hi! ${userDetails.firstname} ${userDetails.lastname}. Do have a nice trip!`
}

const DB = {
    firstname: 'Favour',
    lastname: 'Mfon'
}

console.log(user(DB));
