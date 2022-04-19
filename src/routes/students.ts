import { Router } from 'express'
import { studentController } from "../controllers/studentController"

class StudentRoutes {

    public router: Router = Router()

    constructor() {
        this.config()
    } 
 
    config(): void {
        this.router.get('/', studentController.getStudents)
        this.router.get("/:id", studentController.findById)
        this.router.post("/", studentController.addStudent)
        this.router.patch("/:id", studentController.updateStudent)
        this.router.delete("/:id", studentController.deleteStudent)
    }
}

const studentRoutes = new StudentRoutes()      
export default studentRoutes.router       