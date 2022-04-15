"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error("Incorrect or missing name/surname");
    }
    return nameFromRequest;
};
const parseGrado = (gradoFromRequest) => {
    if (!isString(gradoFromRequest) || !isGrado(gradoFromRequest)) {
        throw new Error("Incorrect or missing grado");
    }
    return gradoFromRequest;
};
const isGrado = (params) => {
    return Object.values(types_1.Grado_alumno).includes(params);
};
const isString = (string) => {
    return typeof string === "string";
};
const toNewStudent = (object) => {
    const student = {
        NOMBRES_ALUMNO: parseName(object.NOMBRES_ALUMNO),
        APELLIDOS_ALUMNO: parseName(object.APELLIDOS_ALUMNO),
        GRADO_ALUMNO: parseGrado(object.GRADO_ALUMNO)
    };
    return student;
};
exports.default = toNewStudent;
