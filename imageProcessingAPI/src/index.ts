/*
 * Express server configuration
 */ 

import express from 'express';
import routes from './routes/index';

const app = express();
const port = 7861;

// Routes
app.use('/', routes);
app.use('/api/images', routes);


// Start Express server
app.listen(port);

export default app;
