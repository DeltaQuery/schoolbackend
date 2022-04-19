import mongoose from "mongoose";
import { Tipo_id} from "../types"

const CustomerSchema = new mongoose.Schema({
  TIPO_REPRESENTANTE: {
    type: String,
    enum: Object.values(Tipo_id),
    required: true
  },
  CEDULA_REPRESENTANTE: {
    type: Number,
    required: true
  },
  NOMBRES_REPRESENTANTE: {
    type: String,
    required: true,
  },
  DIRECCION_REPRESENTANTE: {
    type: String,
    required: true,
  },
  TELEFONO_REPRESENTANTE: {
    type: String,
    required: true,
  },
  CORREO_REPRESENTANTE: {
    type: String,
    required: true,
  },
  TIPO_CLIENTE: {
    type: String,
    enum: Object.values(Tipo_id),
    required: true
  },
  ID_CLIENTE: {
    type: Number,
    required: true
  },
  NOMBRES_CLIENTE: {
    type: String,
    required: true
  },
  DIRECCION_CLIENTE: {
    type: String,
    required: true
  },
  TELEFONO_CLIENTE: {
    type: String,
    required: true
  },
  CORREO_CLIENTE: {
    type: String,
    required: true
  },
  FECHA_REGISTRO: {
    type: String,
    required: true
  },
  REGISTRADO_POR: {
    type: String,
    required: true
  }
}); 

const Customer = mongoose.model("Customer", CustomerSchema);
 
module.exports = Customer;