class Student {
    #name;
    #age;
    #className;

    constructor(name, age, className) {
        this.#name = name;
        this.#age = age;
        this.#className = className;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get className() {
        return this.#className;
    }
}

class StudentList {
    #students = [];

    addStudent(student) {
        this.#students.push(student);
    }

    getStudents() {
        return [...this.#students];
    }
}

// Tạo danh sách một lần
const studentList = new StudentList();

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const classInput = document.getElementById("classInput");
const addStudentButton = document.getElementById("addStudentButton");
const studentListElement = document.getElementById("studentList");

function displayStudents() {
    studentListElement.replaceChildren();

    const students = studentList.getStudents();

    for (const student of students) {
        const paragraph = document.createElement("p");

        paragraph.textContent =
            `${student.name} - Age: ${student.age} - Class: ${student.className}`;

        studentListElement.appendChild(paragraph);
    }
}

function addStudent() {
    const name = nameInput.value.trim();
    const ageText = ageInput.value.trim();
    const className = classInput.value.trim();

    if (name === "" || ageText === "" || className === "") {
        alert("Vui lòng nhập đầy đủ thông tin sinh viên.");
        return;
    }

    const age = Number(ageText);

    if (!Number.isInteger(age) || age <= 0) {
        alert("Tuổi phải là số nguyên dương.");
        return;
    }

    const student = new Student(name, age, className);

    studentList.addStudent(student);
    displayStudents();

    // Xóa ô nhập để thêm sinh viên tiếp theo
    nameInput.value = "";
    ageInput.value = "";
    classInput.value = "";

    nameInput.focus();
}

addStudentButton.addEventListener("click", addStudent);