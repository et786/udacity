import express from "express";
import { resolve } from "path/posix";
import processor from "../utilities/processor";
import fs from 'fs';
import sharp from "sharp";

const routes = express.Router();

// Root endpoint
routes.get('/', (req, res) => {
  res.send('/')
});

// /api/images endpoint
routes.get("/api/images/:id", async (req, res) => {
  // Parameters to retrieve from URL in the form '?filename=[filename]&width=[width]&height=[height]'

  const filename = req.params.id;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const resizedImage = await sharp(`src/routes/api/images/${filename}.png`).jpeg().resize(width, height).toFile(`src/routes/api/output_files/${filename}.jpeg`);

  if (width > 0 && height > 0){
    fs.readFile(`src/routes/api/images/${filename}`, (data: any, error: any) => {
      if (error) { throw error; }
      
      res.writeHead(200, {'Content-Type': 'image/jpeg'})
      res.end(resizedImage);
    })
  }
  



  //const resizedImage = await processor.resize(filename, width, height);


  res.send(`/api/images`);

});


export default routes;
