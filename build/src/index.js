"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students_1 = __importDefault(require("./routes/students"));
//initializations
const app = (0, express_1.default)();
//settings
const PORT = process.env.PORT || 8000;
//middlewares
app.use(express_1.default.json()); //middleware que transforma la req.body a un json
app.use(express_1.default.urlencoded({ extended: false }));
//routes
app.get("/ping", (_req, res) => {
    console.log("ping!!!");
    res.send("pong");
});
app.use("/api/students", students_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
