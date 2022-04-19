"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    CONCEPTO_PRODUCTO: {
        type: String,
        required: true
    },
    PRECIO_PREESCOLAR: {
        type: Number,
        required: false
    },
    PRECIO_BASICA: {
        type: Number,
        required: false
    },
    ESCENARIO_PRODUCTO: {
        type: Number,
        required: true
    },
    TIPO_PRODUCTO: {
        type: String,
        required: true
    },
    DESCRIPCION_PRODUCTO: {
        type: String,
        required: false
    },
    IVA_PRODUCTO: {
        type: Boolean,
        required: true
    },
    ALICUOTA_IVA: {
        type: Number,
        required: false
    },
    PRONTO_PAGO_PREESCOLAR: {
        type: Number,
        required: true
    },
    PAGO_VENCIDO_PREESCOLAR: {
        type: Number,
        required: true
    },
    PRONTO_PAGO_BASICA: {
        type: Number,
        required: true
    },
    PAGO_VENCIDO_BASICA: {
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
    }
});
const Product = mongoose_1.default.model("Product", ProductSchema);
module.exports = Product;
