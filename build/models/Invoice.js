"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../types");
const InvoiceSchema = new mongoose_1.default.Schema({
    FECHA_REGISTRO: {
        type: String,
        required: true,
    },
    CODIGO_FACTURA: {
        type: Number,
        required: true,
        default: null
    },
    ID_REPRESENTANTE: {
        type: String,
        required: true,
    },
    CIUDAD_CLIENTE: {
        type: String,
        default: null
    },
    TIPO_CLIENTE: {
        type: String,
        enum: Object.values(types_1.Tipo_id),
        required: true,
    },
    ID_CLIENTE: {
        type: Number,
        required: true,
    },
    NOMBRES_CLIENTE: {
        type: String,
        required: true,
    },
    DIRECCION_CLIENTE: {
        type: String,
        required: true,
    },
    TELEFONO_CLIENTE: {
        type: String,
        required: true,
    },
    CORREO_CLIENTE: {
        type: String,
        required: true,
    },
    ID_ALUMNO: {
        type: String,
        required: true,
    },
    NOMBRES_ALUMNO: {
        type: String,
        required: true,
    },
    APELLIDOS_ALUMNO: {
        type: String,
        required: true,
    },
    GRADO_ALUMNO: {
        type: String,
        required: true,
    },
    CONCEPTO_1: {
        type: String,
        required: true,
    },
    MONTO_1_USD: {
        type: Number,
        required: true,
    },
    MONTO_1_BS: {
        type: Number,
        required: true,
    },
    MONTO_1_BCV: {
        type: Number,
        required: true,
    },
    CONCEPTO_2: {
        type: String,
        default: null
    },
    MONTO_2_USD: {
        type: Number,
        default: null
    },
    MONTO_2_BS: {
        type: Number,
        default: null
    },
    MONTO_2_BCV: {
        type: Number,
        default: null
    },
    CONCEPTO_3: {
        type: String,
        default: null
    },
    MONTO_3_USD: {
        type: Number,
        default: null
    },
    MONTO_3_BS: {
        type: Number,
        default: null
    },
    MONTO_3_BCV: {
        type: Number,
        default: null
    },
    CONCEPTO_4: {
        type: String,
        default: null
    },
    MONTO_4_USD: {
        type: Number,
        default: null
    },
    MONTO_4_BS: {
        type: Number,
        default: null
    },
    MONTO_4_BCV: {
        type: Number,
        default: null
    },
    CONCEPTO_5: {
        type: String,
        default: null
    },
    MONTO_5_USD: {
        type: Number,
        default: null
    },
    MONTO_5_BS: {
        type: Number,
        default: null
    },
    MONTO_5_BCV: {
        type: Number,
        default: null
    },
    TIPO_TRANSACCION: {
        type: String,
        default: null
    },
    NO_TRANSACCION: {
        type: String,
        default: null
    },
    EFECTIVO: {
        type: Number,
        default: null
    },
    BANCO: {
        type: String,
        default: null
    },
    SUBTOTAL_BS: {
        type: Number,
        required: true,
    },
    SUBTOTAL_USD: {
        type: Number,
        required: true,
    },
    IVA: {
        type: Number,
        required: false,
    },
    TOTAL_BS: {
        type: Number,
        required: true,
    },
    TOTAL_USD: {
        type: Number,
        required: true,
    },
    CREDITO_CONTADO: {
        type: String,
        required: true,
    },
    OBSERVACIONES: {
        type: String,
        default: null
    },
    REGISTRADO_POR: {
        type: String,
        required: true,
    },
    ESTATUS: {
        type: Boolean,
        required: true,
    },
    ADVERTENCIA: {
        type: String,
        default: null
    },
    MOD_FECHA_REGISTRO: {
        type: String,
        default: null
    },
    ESCENARIO_1: {
        type: Number,
        required: true,
    },
    ESCENARIO_2: {
        type: Number,
        default: null
    },
    ESCENARIO_3: {
        type: Number,
        default: null
    },
    ESCENARIO_4: {
        type: Number,
        default: null
    },
    ESCENARIO_5: {
        type: Number,
        default: null
    }
});
const Invoice = mongoose_1.default.model("Invoice", InvoiceSchema);
module.exports = Invoice;
