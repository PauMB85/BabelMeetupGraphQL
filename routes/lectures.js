import express from 'express';
import bodyParser from 'body-parser';
import lectureModel from '../models/lecture';

const lectureRouter = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

lectureRouter.route('/')

    .get(function(request, response) {
        var query = lectureModel.find({});
        query.exec((err, classArray) => {
            response.json(classArray);
        });
    })

    .post(parseUrlencoded, function (request, response) {
        const lectureObject = new lectureModel({
            name: request.body.name,
            subject: request.body.subject,
            lection: request.body.lection,
            date: request.body.date,
            classroom: request.body.classroom
        });
        lectureObject.save((err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("class created");
            }
            response.status(201).send();
        });
    });

lectureRouter.route('/:lectureId')
    
    .get(function(request, response) {
        const lectureId = request.params.lectureId;
        lectureModel.findById(lectureId, function(err, lectureObj) {
            if(lectureObj === undefined) {
                response.status(404).send("Lecture not found");
            } else {
                response.json(lectureObj);
            }
        });
    })
    
    .put(parseUrlencoded, function(request, response) {
        const lectureId = request.params.lectureId;
        lectureModel.findByIdAndUpdate(lectureId,
            request.body,
            {new: true},
            (err, lectureObj) => {
                if (err) response.status(500).send(err);
                return response.send(lectureObj);
            }

        );
    })
    
    .delete(function(request, response) {
        const lectureId = request.params.lectureId;
        lectureModel.findByIdAndRemove(lectureId, function(err, lectureObj) {
            if(err) response.status(500).send(err);
            return response.send(lectureObj);
        });
    });
 
module.exports = lectureRouter;
