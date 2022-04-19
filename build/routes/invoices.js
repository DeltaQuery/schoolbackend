"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceController_1 = require("../controllers/invoiceController");
class InvoiceRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', invoiceController_1.invoiceController.getInvoices);
        this.router.get("/:id", invoiceController_1.invoiceController.findById);
        this.router.post("/", invoiceController_1.invoiceController.addInvoice);
        this.router.patch("/:id", invoiceController_1.invoiceController.updateInvoice);
        this.router.delete("/:id", invoiceController_1.invoiceController.deleteInvoice);
    }
}
const invoiceRoutes = new InvoiceRoutes();
exports.default = invoiceRoutes.router;
