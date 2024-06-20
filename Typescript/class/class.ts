class Human {
    public name: string;
    /**
     * The age of the person.
     */
    protected age: number;
    protected gender: string;
    readonly isHuman: boolean;
    constructor(name:string, age: number, gender: string, isHuman: boolean){
        this.name = name
        this.age = age
        this.gender = gender
        this.isHuman = isHuman
    }
    action() {
        return `Hi, my name is ${this.name}, I am ${this.age}, i identify as a ${this.gender}, human ${this.isHuman}`;
    }
}

const Person = new Human('Favour', 70, 'Male', true)
// console.log(Person)
// console.log(Person.action())


class child extends Human {
    rich: boolean;
    constructor (name:string, age: number, gender: string, isHuman: boolean, rich:boolean) {
        super(name, age, gender, isHuman);
        this.rich = rich;
    }
    action2() {
        return `Hi, my name is ${this.name}, I am ${this.age}, i identify as a ${this.gender}, human ${this.isHuman}. Rich? ${this.rich}`
    }
}
const Pikin = new child('Favour', 70, 'man', false, true)
console.log(Pikin.action2());