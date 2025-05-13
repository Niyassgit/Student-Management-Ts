"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getAllStudents = void 0;
const studentService_1 = require("../services/studentService");
const studentService = new studentService_1.StudentService();
const getAllStudents = async (req, res) => {
    try {
        const data = await studentService.getAllStudents();
        res.status(200).json({ success: true, data });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong." });
    }
};
exports.getAllStudents = getAllStudents;
const createStudent = async (req, res) => {
    try {
        const { name, age, course } = req.body;
        if (!name || !age || !course) {
            res.status(400).json({ success: false, message: 'Missing required field' });
        }
        const newStudent = await studentService.createStudent(name, age, course);
        res.status(201).json({ success: true, data: newStudent });
    }
    catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ success: false, message: "Error creating student" });
    }
};
exports.createStudent = createStudent;
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, course } = req.body;
        const updatedStudent = await studentService.updateStudent(id, name, age, course);
        if (!updatedStudent) {
            res.status(404).json({ success: false, message: 'Student not found!' });
        }
        res.status(200).json({ success: true, data: updatedStudent });
    }
    catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ success: false, message: "Error updating student" });
    }
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const success = await studentService.deleteStudent(id);
        if (!success) {
            res.status(404).json({ success: false, message: 'Student not found!' });
        }
        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    }
    catch (error) {
        console.error("Error deleting student:", error);
        res.status(500).json({ success: false, message: "Error deleting student" });
    }
};
exports.deleteStudent = deleteStudent;
