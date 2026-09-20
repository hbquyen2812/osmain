import { Employee } from "./employee.js";

class EmployeeList {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        }
    }

    *getEmployees() {
        for (const employee of this.employees) {
            yield employee;
        }
    }

    [Symbol.iterator]() {
        return this.getEmployees();
    }
}

export default EmployeeList;