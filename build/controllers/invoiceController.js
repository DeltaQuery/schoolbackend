"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceController = void 0;
const invoiceModel = require("../models/Invoice");
class InvoiceController {
    getInvoices(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const invoices = yield invoiceModel.find({});
            try {
                res.send(invoices);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const invoice = yield invoiceModel.findById(req.params.id);
                if (!invoice)
                    res.status(404).send("No invoice found");
                res.send(invoice);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    addInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const invoice = new invoiceModel(req.body);
            try {
                yield invoice.save();
                res.send(invoice);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    updateInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const invoice = yield invoiceModel.findByIdAndUpdate(req.params.id, req.body);
                yield invoice.save();
                res.send(invoice);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    deleteInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const invoice = yield invoiceModel.findByIdAndDelete(req.params.id);
                if (!invoice)
                    res.status(404).send("No invoice found");
                res.status(200).send();
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.invoiceController = new InvoiceController();
