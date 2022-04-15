import { Grado_alumno, Student } from "../types"
import studentsData from "../ddbb/students.json"

const students: Array<Student> = studentsData as Array<Student>

export const getStudents = () => students
let nStudents: any = students

export const findById = (id: number): Student | undefined => {
    const student = students.find(s => s.ID_ALUMNO === id)
    return student
}

export const addStudent = (newStudent: { NOMBRES_ALUMNO: string; APELLIDOS_ALUMNO: string; GRADO_ALUMNO: Grado_alumno }): Student => {
    const student = {
        ID_ALUMNO: Math.max( ... nStudents.map((s: { ID_ALUMNO: any }) => s.ID_ALUMNO)) + 1,
        ... newStudent
    }

    students.push(student)
    return student
} 
