/*
 * Express server configuration
 */ 

import express from 'express';
import routes from './routes/index';
import path from 'path';

const app = express();
const port = 7861;

// Routes
app.use('/', routes);
app.use('/api/images', routes);

// Static assets
app.use(express.static(`${__dirname}/src`));

// Start Express server
app.listen(port);

export default app;
