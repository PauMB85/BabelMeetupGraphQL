import express from 'express';
import bodyParser from 'body-parser';
import teacherModel from '../models/teacher';

const router = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

router.route('/')

    .get(function(request, response) {
        var query = teacherModel.find({});
        query.exec((err, teacher) => {
            response.json(teacher);
        });
    })

    .post(parseUrlencoded, function (request, response) {
        console.log(request.body);
        const teacher = new teacherModel({
            name: request.body.name,
            birthdate: request.body.birthdate,
            idCard: request.body.idCard
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
 
module.exports = router;
