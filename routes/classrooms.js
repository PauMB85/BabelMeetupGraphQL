import express from 'express';
import bodyParser from 'body-parser';
import classroomModel from '../models/classroom';

const classroomRouter = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

classroomRouter.route('/')

    .get(function(request, response) {
        var query = classroomModel.find({});
        query.exec((err, classroomArray) => {
            response.json(classroomArray);
        });
    })

    .post(parseUrlencoded, function (request, response) {
        const classroomObject = new classroomModel({
            name: request.body.name,
            building: request.body.building,
            floor: request.body.floor,
            capacity: request.body.capacity,
            classes: request.body.classes
        });
        classroomObject.save((err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("classroom created");
            }
            response.status(201).send();
        });
    });
 
classroomRouter.route('/:classRoomId')
    
    .get(function(request, response) {
        const classRoomId = request.params.classRoomId;
        classroomModel.findById(classRoomId, function(err, classObj) {
            if(classObj === undefined) {
                response.status(404).send("Class not found");
            } else {
                response.json(classObj);
            }
        });
    })
    
    .put(parseUrlencoded, function(request, response) {
        const classRoomId = request.params.classRoomId;
        classroomModel.findByIdAndUpdate(classRoomId,
            request.body,
            {new: true},
            (err, classObj) => {
                if (err) response.status(500).send(err);
                return response.send(classObj);
            }

        );
    })
    
    .delete(function(request, response) {
        const classRoomId = request.params.classRoomId;
        classroomModel.findByIdAndRemove(classId, function(err, classObj) {
            if(err) response.status(500).send(err);
            return response.send(classObj);
        });
    });

module.exports = classroomRouter;
