"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
class StudentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', studentController_1.studentController.getStudents);
        this.router.get("/:id", studentController_1.studentController.findById);
        this.router.post("/", studentController_1.studentController.addStudent);
        this.router.patch("/:id", studentController_1.studentController.updateStudent);
        this.router.delete("/:id", studentController_1.studentController.deleteStudent);
    }
}
const studentRoutes = new StudentRoutes();
exports.default = studentRoutes.router;
