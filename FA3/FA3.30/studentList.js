import Student from "./student.js";

class StudentList {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }
    }

    [Symbol.iterator]() {
        let index = 0;
        const students = this.students;

        return {
            next() {
                if (index < students.length) {
                    return {
                        value: students[index++],
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }

    *getStudents() {
        for (const student of this.students) {
            yield student;
        }
    }
}

export default StudentList;