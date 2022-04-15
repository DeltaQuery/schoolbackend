"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = exports.findById = exports.getStudents = void 0;
const students_json_1 = __importDefault(require("../ddbb/students.json"));
const students = students_json_1.default;
const getStudents = () => students;
exports.getStudents = getStudents;
let nStudents = students;
const findById = (id) => {
    const student = students.find(s => s.ID_ALUMNO === id);
    return student;
};
exports.findById = findById;
const addStudent = (newStudent) => {
    const student = Object.assign({ ID_ALUMNO: Math.max(...nStudents.map((s) => s.ID_ALUMNO)) + 1 }, newStudent);
    students.push(student);
    return student;
};
exports.addStudent = addStudent;
