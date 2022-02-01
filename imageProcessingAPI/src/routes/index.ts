import express from "express";
import { resolve } from "path/posix";
import processor from "../utilities/processor";

const routes = express.Router();

// Root endpoint
routes.get('/', (req, res) => {
  res.send('/')
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


export default routes;
