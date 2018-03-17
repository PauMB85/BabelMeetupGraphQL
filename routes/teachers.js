import express from 'express';
import bodyParser from 'body-parser';
import teacherModel from '../models/teacher';

const teachersRouter = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

teachersRouter.route('/')

    .get(function(request, response) {
        var query = teacherModel.find({});
        query.exec((err, teacher) => {
            response.json(teacher);
        });
    })

    .post(bodyParser.json(), function (request, response) {
        const teacher = new teacherModel({
            name: request.body.name,
            birthdate: request.body.birthdate,
            salary: request.body.salary
        });
        teacher.save((err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("teacher created");
            }
            response.status(201).send();
        });
    });
 
teachersRouter.route('/:teacherId')
    
    .get(function(request, response) {
        const teacherId = request.params.teacherId;
        teacherModel.findById(teacherId, function(err, teacherObj) {
            if(teacherObj === undefined) {
                response.status(404).send("Class not found");
            } else {
                response.json(teacherObj);
            }
        });
    })
    
    .put(bodyParser.json(), function(request, response) {
        const teacherId = request.params.teacherId;
        teacherModel.findByIdAndUpdate(teacherId,
            request.body,
            {new: true},
            (err, teacherObj) => {
                if (err) response.status(500).send(err);
                return response.send(teacherObj);
            }
        );
    })
    
    .delete(function(request, response) {
        const teacherId = request.params.teacherId;
        teacherModel.findByIdAndRemove(teacherId, function(err, teacherObj) {
            if(err) response.status(500).send(err);
            return response.send(teacherObj);
        });
    });

module.exports = teachersRouter;
