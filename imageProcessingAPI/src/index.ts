/*
 * Express server configuration
 */

import express from "express";
import routes from "./routes/index";

const app = express();
const port = 7861;

app.use("/", routes);
// Start Express server
app.listen(port);
