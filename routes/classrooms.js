import express from 'express';
import bodyParser from 'body-parser';
import classroomModel from '../models/classroom';

const router = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

router.route('/')

    .get(function(request, response) {
        var query = classroomModel.find({});
        query.exec((err, classroomArray) => {
            response.json(classroomArray);
        });
    })

    .post(parseUrlencoded, function (request, response) {
        console.log(request.body);
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
 
module.exports = router;
