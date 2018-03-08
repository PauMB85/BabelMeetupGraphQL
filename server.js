import express from 'express';
import config from './config';
import logger from './logger';

const server = express();

server.listen(config.server.port, () => {
    console.log("Listening on port " + config.server.port);
});

server.use(logger);