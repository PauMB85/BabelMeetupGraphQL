import express from 'express';
import bodyParser from 'body-parser';
import classModel from '../models/class';

const classRouter = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

classRouter.route('/')

    .get(function(request, response) {
        var query = classModel.find({});
        query.exec((err, classArray) => {
            response.json(classArray);
        });
    })

    .post(parseUrlencoded, function (request, response) {
        console.log(request.body);
        const classObject = new classModel({
            name: request.body.name,
            subject: request.body.subject,
            lection: request.body.lection,
            date: request.body.date,
            classroom: request.body.classroom
        });
        classObject.save((err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("class created");
            }
            response.status(201).send();
        });
    });
    
classRouter.route('/:classId')
    
    .get(function(request, response) {
        const classId = request.params.classId;
        classModel.findById(classId, function(err, classObj) {
            if(classObj === undefined) {
                response.status(404).send("Class not found");
            } else {
                response.json(classObj);
            }
        });
    })
    
    .put(function(request, response) {
        const classId = request.params.classId;
        console.log(request.body);
        classModel.findByIdAndUpdate(classId,
            request.body,
            {new: true},
            (err, classObj) => {
                if (err) response.status(500).send(err);
                return response.send(classObj);
            }

        );
    });
 
module.exports = classRouter;
