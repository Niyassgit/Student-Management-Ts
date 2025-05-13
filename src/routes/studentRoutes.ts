import express from 'express';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from '../controllers/studentController';

const router = express.Router();

// Student routes
router.get('/', getAllStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;