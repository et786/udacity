/*
 * Express server configuration
 */

import express from "express";
import routes from "./routes/index";

const app = express();
const port = 7861;

// Routes
app.use("/", routes);
app.use("/api/images/", routes);
app.set("view engine", "ejs");

// Static assets
app.use(express.static("public"));
app.use(express.static("assets"));

// Start Express server
app.listen(port);

export default app;
