import mongoose from "mongoose";
import { Grado_alumno, Nivel_alumno, Tipo_id} from "../types"

const StudentSchema = new mongoose.Schema({
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
    enum: Object.values(Tipo_id),
    required: true
  },
  CEDULA_ALUMNO: {
    type: Number,
    required: false
  },
  GRADO_ALUMNO: {
    type: String,
    enum: Object.values(Grado_alumno),
    required: true
  },
  NIVEL_ALUMNO: {
    type: String,
    enum: Object.values(Nivel_alumno),
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

const Student = mongoose.model("Student", StudentSchema);
 
module.exports = Student;