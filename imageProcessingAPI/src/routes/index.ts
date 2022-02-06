import express, { response } from "express";
import { resolve } from "path/posix";
import processor from "../utilities/processor";
import fs from "fs";
import sharp from "sharp";

const routes = express.Router();

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

  if (width <= 0 || height <= 0) {
    res.send("Width and height of resized image must be positive integers.");
  } else {
    try {
      await processor.resize(filename, width, height);
      const thumb = `/thumb/${filename}${width}x${height}.jpg`;

      res.status(200).render("resizedImage", { src: thumb });
    } catch (error) {
      throw error;
    }
  }
  //const resizedImage = await processor.resize(filename, width, height);
});

export default routes;
