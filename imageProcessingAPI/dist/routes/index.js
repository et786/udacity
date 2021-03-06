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
// Image display endpoint
routes.get("/api/images/", async (req, res) => {
    /*
     * Parameters to retrieve from URL in the form
     * '?filename=[filename]&width=[width]&height=[height]'
     */
    const filename = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    // Specify asset location and thumb location and check for existence of the asset and/or the thumbnail
    const jpegThumb = `/thumb/${filename}${width}x${height}.jpg`;
    const pngAsset = `assets/full/${filename}.png`;
    const assetExists = fs_1.default.existsSync(pngAsset);
    const thumbExists = fs_1.default.existsSync(`public/${jpegThumb}`);
    if (thumbExists) {
        // Check for already existing, matching JPEG thumbnail according to given filename, width and height
        if (width > 0 && height > 0) {
            // Both width and height must be positive integers
            /*
             * Uncomment the following console.log statement to confirm that that the thumbnail is actually being served:
             */
            console.log(jpegThumb, " has been loaded");
            // Serve the stored thumbnail image specified by filename, width and height already if it already exists in thumb directory
            res.status(200).render("resizedImage", { src: jpegThumb });
        }
        else {
            res
                .status(403)
                .send("Width and height of resized image must be positive integers.");
        }
    }
    else if (assetExists) {
        // Check for matching pngAsset according to given filename, width and height
        if (width > 0 && height > 0) {
            // Both width and height must be positive integers
            // Resize pngAsset according to specified query params 'height' and 'width' and convert it to PNG
            try {
                // Wait for void Promise to resolve or reject
                await processor_1.default.resize(filename, width, height);
                /*
                 * Uncomment the following console.log statement to confirm that
                 * the pngAsset has been resized and converted into a JPEG thumbnail:
                 */
                console.log("PNG image", pngAsset, "has been resized and converted into a JPEG image in ", jpegThumb);
                // Response passes resized image to view 'resizedImage.ejs'
                res.status(200).render("resizedImage", { src: jpegThumb });
            }
            catch (error) {
                throw error;
            }
        }
        else {
            res
                .status(403)
                .send("Width and height of resized image must be positive integers.");
        }
    }
    else {
        res
            .status(404)
            .send("File not found. \nTo resize an image, specify the filename and desired height and width in the URL query parameters.");
    }
});
exports.default = routes;
