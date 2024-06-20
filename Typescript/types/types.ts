type stringOrNumber = string | number;
type User = {
    id: stringOrNumber;
    name: string;
    age: number;
    gender: string;
};

const person : User = {
    id: '10',
    name: 'Favour',
    age: 25,
    gender: 'male'
};

console.log(person);
