"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../types");
const CustomerSchema = new mongoose_1.default.Schema({
    TIPO_REPRESENTANTE: {
        type: String,
        enum: Object.values(types_1.Tipo_id),
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
        enum: Object.values(types_1.Tipo_id),
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
const Customer = mongoose_1.default.model("Customer", CustomerSchema);
module.exports = Customer;
