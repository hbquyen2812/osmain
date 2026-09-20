const _name = Symbol("name");
const _age = Symbol("age");
const _type = Symbol("type");

class Pet {
    constructor(name, age, type) {
        this[_name] = name;
        this[_age] = age;
        this[_type] = type;
    }

    getName() {
        return this[_name];
    }

    getAge() {
        return this[_age];
    }

    getType() {
        return this[_type];
    }
}

class Dog extends Pet {
    constructor(name, age) {
        super(name, age, "Dog");
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, age, "Cat");
    }
}

export { Pet, Dog, Cat };