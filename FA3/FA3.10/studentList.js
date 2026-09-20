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


    getStudents() {
        return this.students;
    }
}


export default StudentList;