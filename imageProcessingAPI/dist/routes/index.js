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
    // Return type is void and not Promise<void> because this function is not async
    res.send("/");
});
// Resizing endpoint
routes.get("/api/images/", async (req, res) => {
    /*
    * Reviewer: "You must check if the image resized with the same parameters exist
    * and if it does, return that image as a response instead of resizing."
    */
    /*
    * Parameters to retrieve from URL in the form
    * '?filename.[extension]=[filename]&width=[width]&height=[height]'
    */
    const filename = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    // Specify asset location and thumb location and check for existence of the asset and/or the thumbnail  
    const jpegThumb = `/thumb/${filename}${width}x${height}.jpg`;
    const pngAsset = `assets/full/${filename}.png`;
    const assetExists = fs_1.default.existsSync(pngAsset);
    const thumbExists = fs_1.default.existsSync(jpegThumb);
    if (thumbExists) {
        if (width > 0 && height > 0) {
            // Serve stored thumbnail if image specified by filename, width and height already exists in thumb directory
            console.log(jpegThumb, " has been loaded");
            res.status(200).render("resizedImage", { src: jpegThumb });
        }
        else {
            res.status(403).send("Width and height of resized image must be positive integers.");
        }
    }
    else if (assetExists) {
        if (width > 0 && height > 0) { // Both width and height must be positive integers
            try {
                // Wait for void Promise to resolve or reject
                await processor_1.default.resize(filename, width, height);
                console.log('Image has been resized');
                // Response passes resized image to view 'resizedImage.ejs'
                res.status(200).render("resizedImage", { src: jpegThumb });
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
});
exports.default = routes;
