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
routes.get("/api/images/", async (req, res) => {
    // Parameters to retrieve from URL in the form '?filename=[filename]&width=[width]&height=[height]'
    const filename = req.query.filename;
    //const width = req.query.width;
    //const height = req.query.height;
    //const resizedImage = await processor.resize(filename, width, height);
    res.sendFile(`/api/images/${filename}`);
});
exports.default = routes;
