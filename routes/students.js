import express from 'express';
import bodyParser from 'body-parser';
import studentModel from '../models/student';
import classModel from '../models/class';

const studentRouter = express.Router();

const parseUrlencoded = bodyParser.urlencoded({extended:true});

studentRouter.route('/')

    .get(function(request, response) {
        var query = studentModel.find({});
        query.exec((err, students) => {
            response.json(students);
        });
    })

    .post(bodyParser.json(), function (request, response) {
        const student = new studentModel({
            name: request.body.name,
            birthdate: request.body.birthdate,
            idCard: request.body.idCard,
        });
        
        if(request.body.classes !== undefined) {
            const query = classModel.find({"_id":{"$in":request.body.classes, "$exists": true}})

            query.exec((err, classes) => {
                if(err) response.status(500).send(err);
                classes.map(classObj => student.classes.push(classObj));
                student.save((err) => {
                    if(err) response.status(500).send(err);
                    response.status(201).send();
                });
            });
        }
    });

studentRouter.route('/:studentId')
    
    .get(function(request, response) {
        const studentId = request.params.studentId;
        studentModel.findById(studentId, function(err, studentObj) {
            if(studentObj === undefined) {
                response.status(404).send("Student not found");
            } else {
                response.json(studentObj);
            }
        });
    })
    
    .put(parseUrlencoded, function(request, response) {
        const studentId = request.params.studentId;
        studentModel.findByIdAndUpdate(studentId,
            request.body,
            {new: true},
            (err, studentObj) => {
                if (err) response.status(500).send(err);
                return response.send(studentObj);
            }

        );
    })
    
    .delete(function(request, response) {
        const studentId = request.params.studentId;
        studentModel.findByIdAndRemove(studentId, function(err, studentObj) {
            if(err) response.status(500).send(err);
            return response.send(studentObj);
        });
    });

module.exports = studentRouter;
