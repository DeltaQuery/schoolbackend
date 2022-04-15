import { Grado_alumno, Student } from "./types";

const parseName = (nameFromRequest: any): string => {
    if (!isString(nameFromRequest)){
        throw new Error("Incorrect or missing name/surname")
    }
    return nameFromRequest
}

const parseGrado = (gradoFromRequest: any): Grado_alumno => {
    if (!isString(gradoFromRequest) || !isGrado(gradoFromRequest)){
        throw new Error("Incorrect or missing grado")
    }
    return gradoFromRequest
}

const isGrado = (params: any): boolean => {
    return Object.values(Grado_alumno).includes(params)
}

const isString = (string: string):boolean => {
    return typeof string === "string"
}

const toNewStudent = (object: any): Student => {
    const student: Student = {
        NOMBRES_ALUMNO: parseName(object.NOMBRES_ALUMNO),
        APELLIDOS_ALUMNO: parseName(object.APELLIDOS_ALUMNO),
        GRADO_ALUMNO: parseGrado(object.GRADO_ALUMNO)
    }
    return student
}

export default toNewStudent