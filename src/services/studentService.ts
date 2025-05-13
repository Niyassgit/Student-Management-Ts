import { strict } from 'assert';
import { deleteStudent } from '../controllers/studentController';
import { Student } from '../interfaces/IStudent';
import { v4 as uuidv4 } from 'uuid';

let students: Student[] = [];

export class StudentService {
    async getAllStudents(): Promise<Student[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(students), 100);
        });
    }

    async getStudentById(id: string): Promise<Student | null> {
        return new Promise((resolve) => {
            const student = students.find(s => s.id == id);
            setTimeout(() => resolve(student || null), 100);
        });
    }

    async createStudent(name: string, age: number, course: string): Promise<Student> {
        return new Promise((resolve) => {
            const newStudent: Student = {
                id: uuidv4(),
                name,
                age,
                course
            };
            students.push(newStudent);
            setTimeout(() => resolve(newStudent), 100);
        })

    }

    async updateStudent(id: string, name?: string, age?: number, course?: string): Promise<Student | null> {

        return new Promise((resolve) => {
            const student = students.find((s) => s.id == id);
              if(!student) return resolve(null);

            student.name = name || student.name;
            student.age = age || student.age;
            student.course = course || student.course

             setTimeout(()=>resolve(student),100)

        })

    }

   async deleteStudent(id: string): Promise<boolean >{

    return new Promise((resolve)=>{
       const index = students.findIndex((s) => s.id === id);
        if (index === -1) return resolve(false);
        students.splice(index, 1);
        setTimeout(()=>resolve(true),100);

    });
       
    }
}