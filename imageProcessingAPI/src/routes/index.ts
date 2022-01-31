import express from "express";
import { resolve } from "path/posix";
import processor from "../utilities/processor";

const routes = express.Router();

// Root endpoint
routes.get('/', (req, res) => {
  res.send('/')
});

// /api/images endpoint
routes.get("/api/images", (req, res) => {
  res.send("/api/images");
});

export default routes;
