"use strict";
/*
 * Express server configuration
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 7861;
// Routes
app.use('/', index_1.default);
app.use('/api/images', index_1.default);
// Static assets
app.use(express_1.default.static('public'));
app.use(express_1.default.static('src/routes/api/images'));
// Start Express server
app.listen(port);
exports.default = app;
