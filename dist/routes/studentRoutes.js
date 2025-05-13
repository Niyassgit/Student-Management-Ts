"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const router = express_1.default.Router();
// Student routes
router.get('/', studentController_1.getAllStudents);
router.post('/', studentController_1.createStudent);
router.put('/:id', studentController_1.updateStudent);
router.delete('/:id', studentController_1.deleteStudent);
exports.default = router;
