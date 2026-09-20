const _name = Symbol("name");
const _age = Symbol("age");
const _class = Symbol("class");

class Student {
    constructor(name, age, studentClass) {
        this[_name] = name;
        this[_age] = age;
        this[_class] = studentClass;
    }

    getName() {
        return this[_name];
    }

    getAge() {
        return this[_age];
    }

    getClass() {
        return this[_class];
    }
}

export default Student;