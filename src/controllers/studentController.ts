import { Request, Response } from "express";
import { StudentService } from "../services/studentService";

const studentService = new StudentService();

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const data = await studentService.getAllStudents();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong." });
    }
};

export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, age, course } = req.body;
        
        if (!name || !age || !course) {
             res.status(400).json({ success: false, message: 'Missing required field' });
        }
        
        const newStudent = await studentService.createStudent(name, age, course);
         res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
        console.error("Error creating student:", error);
         res.status(500).json({ success: false, message: "Error creating student" });
    }
};

export const updateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, age, course } = req.body;
        
        const updatedStudent = await studentService.updateStudent(id, name, age, course);
        if (!updatedStudent) {
             res.status(404).json({ success: false, message: 'Student not found!' });
        }
        
         res.status(200).json({ success: true, data: updatedStudent });
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ success: false, message: "Error updating student" });
    }
};

export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        
        const success = await studentService.deleteStudent(id);
        if (!success) {
             res.status(404).json({ success: false, message: 'Student not found!' });
        }
                
         res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        console.error("Error deleting student:", error);
         res.status(500).json({ success: false, message: "Error deleting student" });
    }
};