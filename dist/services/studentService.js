"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const uuid_1 = require("uuid");
let students = [];
class StudentService {
    async getAllStudents() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(students), 100);
        });
    }
    async getStudentById(id) {
        return new Promise((resolve) => {
            const student = students.find(s => s.id == id);
            setTimeout(() => resolve(student || null), 100);
        });
    }
    async createStudent(name, age, course) {
        return new Promise((resolve) => {
            const newStudent = {
                id: (0, uuid_1.v4)(),
                name,
                age,
                course
            };
            students.push(newStudent);
            setTimeout(() => resolve(newStudent), 100);
        });
    }
    async updateStudent(id, name, age, course) {
        return new Promise((resolve) => {
            const student = students.find((s) => s.id == id);
            if (!student)
                return resolve(null);
            student.name = name || student.name;
            student.age = age || student.age;
            student.course = course || student.course;
            setTimeout(() => resolve(student), 100);
        });
    }
    async deleteStudent(id) {
        return new Promise((resolve) => {
            const index = students.findIndex((s) => s.id === id);
            if (index === -1)
                return resolve(false);
            students.splice(index, 1);
            setTimeout(() => resolve(true), 100);
        });
    }
}
exports.StudentService = StudentService;
