"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const studentModel = require("../models/Student");
class StudentController {
    getStudents(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield studentModel.find({});
            try {
                res.send(students);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield studentModel.findById(req.params.id);
                if (!student)
                    res.status(404).send("No student found");
                res.send(student);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    addStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new studentModel(req.body);
            try {
                yield student.save();
                res.send(student);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield studentModel.findByIdAndUpdate(req.params.id, req.body);
                console.log(req.params.id);
                console.log(req.body);
                yield student.save();
                res.send(student);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield studentModel.findByIdAndDelete(req.params.id);
                if (!student)
                    res.status(404).send("No student found");
                res.status(200).send();
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.studentController = new StudentController();
