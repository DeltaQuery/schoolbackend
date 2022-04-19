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
exports.customerController = void 0;
const customerModel = require("../models/Customer");
class CustomerController {
    getCustomers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customerModel.find({});
            try {
                res.send(customers);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customerModel.findById(req.params.id);
                if (!customer)
                    res.status(404).send("No customer found");
                res.send(customer);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    addCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = new customerModel(req.body);
            try {
                yield customer.save();
                res.send(customer);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customerModel.findByIdAndUpdate(req.params.id, req.body);
                yield customer.save();
                res.send(customer);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customerModel.findByIdAndDelete(req.params.id);
                if (!customer)
                    res.status(404).send("No customer found");
                res.status(200).send();
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.customerController = new CustomerController();
