import express from "express";
import processor from "../utilities/processor";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("/");
});

export default routes;
