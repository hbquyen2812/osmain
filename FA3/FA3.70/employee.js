const _name = Symbol("name");
const _age = Symbol("age");
const _role = Symbol("role");

class Employee {
    constructor(name, age, role) {
        this[_name] = name;
        this[_age] = age;
        this[_role] = role;
    }

    getName() {
        return this[_name];
    }

    getAge() {
        return this[_age];
    }

    getRole() {
        return this[_role];
    }

    getInfo() {
        return `Tên: ${this.getName()}, Tuổi: ${this.getAge()}, Vai trò: ${this.getRole()}`;
    }
}

class Manager extends Employee {
    constructor(name, age) {
        super(name, age, "Manager");
    }

    getInfo() {
        return `Manager - Tên: ${this.getName()}, Tuổi: ${this.getAge()}`;
    }
}

class Developer extends Employee {
    constructor(name, age) {
        super(name, age, "Developer");
    }

    getInfo() {
        return `Developer - Tên: ${this.getName()}, Tuổi: ${this.getAge()}`;
    }
}

export { Employee, Manager, Developer };