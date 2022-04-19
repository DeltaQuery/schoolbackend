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
exports.productController = void 0;
const productModel = require("../models/Product");
class ProductController {
    getProducts(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield productModel.find({});
            try {
                res.send(products);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productModel.findById(req.params.id);
                if (!product)
                    res.status(404).send("No product found");
                res.send(product);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new productModel(req.body);
            try {
                yield product.save();
                res.send(product);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productModel.findByIdAndUpdate(req.params.id, req.body);
                yield product.save();
                res.send(product);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productModel.findByIdAndDelete(req.params.id);
                if (!product)
                    res.status(404).send("No product found");
                res.status(200).send();
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.productController = new ProductController();
