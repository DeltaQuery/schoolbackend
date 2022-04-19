"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainController_1 = require("../controllers/mainController");
class MainRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", mainController_1.mainController.main);
    }
}
const mainRoutes = new MainRoutes();
exports.default = mainRoutes.router;
