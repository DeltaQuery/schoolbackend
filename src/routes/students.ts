import express from "express";
import * as studentsController from "../controllers/studentsController"
import toNewStudent from "../utils";

const router = express.Router()

router.get("/", (_req,res) => {
    res.send(studentsController.getStudents())
})

router.get("/:id", (req,res) => {
    const student = studentsController.findById(+req.params.id)

    return (student != null)
    ? res.send(student)
    : res.sendStatus(404)
})

router.post("/", (req, res) => {
    try {
        const { NOMBRES_ALUMNO, APELLIDOS_ALUMNO, GRADO_ALUMNO } = req.body;

        const student = toNewStudent(req.body)

        const addedStudent = studentsController.addStudent(student)
    
        res.json(addedStudent)
    } catch (e: any) {
        res.status(400).send(e.message)
    }
})

export default router 