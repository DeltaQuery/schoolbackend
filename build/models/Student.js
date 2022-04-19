"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../types");
const StudentSchema = new mongoose_1.default.Schema({
    NOMBRES_ALUMNO: {
        type: String,
        required: true,
    },
    APELLIDOS_ALUMNO: {
        type: String,
        required: true,
    },
    TIPO_ALUMNO: {
        type: String,
        enum: Object.values(types_1.Tipo_id),
        required: true
    },
    CEDULA_ALUMNO: {
        type: Number,
        required: false
    },
    GRADO_ALUMNO: {
        type: String,
        enum: Object.values(types_1.Grado_alumno),
        required: true
    },
    NIVEL_ALUMNO: {
        type: String,
        enum: Object.values(types_1.Nivel_alumno),
        required: true
    },
    SEXO_ALUMNO: {
        type: Number,
        required: false
    },
    EDAD_ALUMNO: {
        type: Number,
        required: false
    },
    BECA_ALUMNO: {
        type: Boolean,
        required: true
    },
    DESC_ALUMNO: {
        type: Number,
        required: true
    },
    INICIO_COBRO: {
        type: Number,
        required: true
    },
    FINAL_COBRO: {
        type: Number,
        required: true
    },
    FECHA_REGISTRO: {
        type: String,
        required: true
    },
    REGISTRADO_POR: {
        type: String,
        required: true
    },
    ESTATUS: {
        type: Boolean,
        required: true
    },
    FECHA_RETIRO: {
        type: Number,
        required: true
    },
    ID_REPRESENTANTE: {
        type: String,
        required: true
    }
});
const Student = mongoose_1.default.model("Student", StudentSchema);
module.exports = Student;
