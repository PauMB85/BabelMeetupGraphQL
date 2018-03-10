import express from 'express';
import bodyParser from 'body-parser';
import studentModel from '../models/student';

const router = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:false});

router.route('/')

    .get(function(request, response) {
        var query = studentModel.find({});
        query.exec((err, student) => {
            response.json(student);
        });
    })

    .post(parseUrlencoded, function (request, response) {
        console.log(request.body);
        const student = new studentModel({
            name: request.body.name,
            birthdate: request.body.birthdate,
            idCard: request.body.idCard
        });
        student.save((err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Student created");
            }
            response.status(201).send();
        });
    });
 
module.exports = router;
