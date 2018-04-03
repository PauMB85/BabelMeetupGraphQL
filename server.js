import express from 'express';
import config from './config';
import logger from './logger';
import students from './routes/students';
import teachers from './routes/teachers';
import lectures from './routes/lectures';
import classrooms from './routes/classrooms';

const server = express();

server.listen(config.server.port, () => {
    console.log("Listening on port " + config.server.port);
});

server.use(logger);

server.use('/students', students);
server.use('/teachers', teachers);
server.use('/lectures', lectures);
server.use('/classrooms', classrooms);


server.use(express.static('public'));