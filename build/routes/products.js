"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class ProductRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productController_1.productController.getProducts);
        this.router.get("/:id", productController_1.productController.findById);
        this.router.post("/", productController_1.productController.addProduct);
        this.router.patch("/:id", productController_1.productController.updateProduct);
        this.router.delete("/:id", productController_1.productController.deleteProduct);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
