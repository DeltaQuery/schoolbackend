"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = require("../controllers/customerController");
class CustomerRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', customerController_1.customerController.getCustomers);
        this.router.get("/:id", customerController_1.customerController.findById);
        this.router.post("/", customerController_1.customerController.addCustomer);
        this.router.patch("/:id", customerController_1.customerController.updateCustomer);
        this.router.delete("/:id", customerController_1.customerController.deleteCustomer);
    }
}
const customerRoutes = new CustomerRoutes();
exports.default = customerRoutes.router;
