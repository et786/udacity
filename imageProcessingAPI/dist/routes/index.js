"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
// Root endpoint
routes.get('/', (req, res) => {
    res.send('/');
});
// /api/images endpoint
routes.get("/api/images", (req, res) => {
    res.send("/api/images");
});
exports.default = routes;
