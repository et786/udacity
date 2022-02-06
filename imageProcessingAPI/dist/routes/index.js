"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processor_1 = __importDefault(require("../utilities/processor"));
const routes = express_1.default.Router();
// Root endpoint
routes.get('/', (req, res) => {
    res.send('/');
});
// Resizing endpoint
routes.get("/api/images", async (req, res) => {
    // Parameters to retrieve from URL in the form '?filename.[extension]=[filename]&width=[width]&height=[height]'
    const filename = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    try {
        await processor_1.default.resize(filename, width, height);
        const thumb = `/thumb/${filename}${width}x${height}.jpg`;
        res.status(200).render("resizedImage", {
            src: thumb
        });
    }
    catch (error) {
        throw error;
    }
    //const resizedImage = await processor.resize(filename, width, height);
});
exports.default = routes;
