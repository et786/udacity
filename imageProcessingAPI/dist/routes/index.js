"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const routes = express_1.default.Router();
// Root endpoint
routes.get('/', (req, res) => {
    res.send('/');
});
// /api/images endpoint
routes.get("/api/images/:id", async (req, res) => {
    // Parameters to retrieve from URL in the form '?filename=[filename]&width=[width]&height=[height]'
    const filename = req.params.id;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const resizedImage = await (0, sharp_1.default)(filename).resize(width, height).toFile(`../src/routes/api/images/${filename}`);
    if (width > 0 && height > 0) {
        fs_1.default.readFile(`../src/routes/api/images/${filename}`, (data, error) => {
            if (error) {
                throw error;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.sendFile(resizedImage.toString());
        });
    }
    //const resizedImage = await processor.resize(filename, width, height);
    res.send(`/api/images`);
});
exports.default = routes;
