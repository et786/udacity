"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processor_1 = __importDefault(require("../utilities/processor"));
const fs_1 = __importDefault(require("fs"));
const routes = express_1.default.Router();
// Root endpoint
routes.get("/", (req, res) => {
    res.send("/");
});
// Resizing endpoint
routes.get("/api/images/", async (req, res) => {
    // Parameters to retrieve from URL in the form '?filename.[extension]=[filename]&width=[width]&height=[height]'
    const filename = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const assetExists = fs_1.default.existsSync(`assets/full/${filename}.png`);
    if (assetExists) {
        if (width > 0 && height > 0) { // both width and height must be positive integers
            try {
                // Wait for void Promise to resolve or reject
                await processor_1.default.resize(filename, width, height);
                const thumb = `/thumb/${filename}${width}x${height}.jpg`;
                // Response passes resized image to view 'resizedImage.ejs'
                res.status(200).render("resizedImage", { src: thumb });
            }
            catch (error) {
                throw error;
            }
        }
        else {
            res.status(403).send("Width and height of resized image must be positive integers.");
        }
    }
    else {
        res.status(404).send("File not found.");
    }
    //const resizedImage = await processor.resize(filename, width, height);
});
exports.default = routes;
