const express = require("express");
const LoginModel = require("../model/LoginModel")
const userRouter = express.Router();
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');


/*

* url:http://localhost:5000/user/register
* method: POST

* need: register new user if mode is 0
* body: {
*   "name": "vickyM",
*   "password": "12345",
*   "mode":0
* }

* need: updates the exixiting  user if mode is 1
* body: {
*   "id":"64411c60aa38fdd2773bf1ce"
*   "name": "vickyM",
*   "password": "12345",
*   "mode":1
* }

*/

userRouter.post('/register', function (request, response) {

    var entitySchema = mongoose.Schema({
        testvalue: { type: Number }
    });

    console.log("entitySchema", entitySchema.$id)

    const LoginDoc = new LoginModel({
        name: request.body.name,
        password: request.body.password,
        created: Date(),
        modified: Date(),
        id: entitySchema.$id,
        clientId: entitySchema.$id
    })

    console.log("LoginDoc", LoginDoc)
    if (request.body) {
        console.log("request.body.mode", request.body)

        LoginModel.findOne({ name: request.body.name })
            .then((users) => {
                if (users) {
                    response.status(200).send({
                        data: {
                            message: "User exists",
                            data: request.body.name,
                            status: 401
                        }
                    })
                }
                else {
                    LoginDoc.save()
                        .then((result) => {
                            console.log("res", result)
                            response.status(201).send({
                                data: {
                                    message: "User created successfully",
                                    data: result,
                                    status: 201
                                }
                            })

                        })


                        .catch((error) => {
                            response.status(404).send({
                                data: {
                                    message: "User created failed",
                                    data: error
                                }
                            })
                        })
                }
            })
    }
    else {

        LoginModel.findOne({ name: request.body.name })
            .then((users) => {
                if (users) {
                    response.status(200).send({
                        data: {
                            message: "User exists",
                            data: request.body.name,
                            status: 401
                        }
                    })
                } else {

                    const updatedValue = {
                        name: request.body.name,
                        password: request.body.password,
                        created: Date(),
                        modified: Date()
                    }

                    const filterValue = { _id: request.body.id }

                    // console.log("updatevale", updatedValue)

                    LoginModel.findOneAndUpdate(filterValue, updatedValue, { upsert: true, new: true, setDefaultsOnInsert: true })
                        .then((result) => {
                            // console.log("up", result)
                            response.status(201).send({
                                data: {
                                    message: "User updated successfully",
                                    data: result,
                                    status: 201
                                }
                            })

                        })
                        .catch((error) => {
                            response.status(404).send({
                                data: {
                                    message: "User updated failed",
                                    data: error
                                }
                            })
                        })
                }
            })

    }

})



/*

* url:http://localhost:5000/user/login
* method: POST
* body: {
*  "name": "vickyM",
*  "password": "12345"
* }
 
*/

userRouter.post('/login', function (request, response) {
    // console.log("request.body", request.body)
    LoginModel.findOne({ name: request.body.name })
        .then((users) => {
            if (users === null) {
                response.send({

                    data: {
                        message: " Data not found please register",
                        status: 404,
                        login: false

                    }

                })
            }
            else if (request.body.password === users.password) {
                // console.log(users)
                response.send({
                    data: {
                        status: 200,
                        message: "login success",
                        data: users,
                        login: true
                    }

                })
            }
            else {
                response.send({
                    data: {

                        message: "login failed",
                        status: 400,
                        login: false
                    }
                })
            }

        })

})


/*

* url:http://localhost:5000/user/userlist
* method: GET 
* body :{
*    "id":"64411c60aa38fdd2773bf1ce"
*  }

*/

userRouter.get('/userlist', function (request, response) {

    LoginModel.find({})
        .then((result) => {
            response.status(200).send({
                message: "User data fetched successfully",
                data: result
            })

        })
        .catch((error) => {
            response.status(404).send({
                message: "User  data fetch failed ",
                data: error
            })
        })


})


/*
* url:http://localhost:5000/user/delUser
* method: POST
*/

userRouter.post('/delUser', function (request, response) {

    LoginModel.find({ _id: request.body.id }).then((data) => {
        // console.log("data", data && data.length > 0 && data !== undefined)

        if (data && data.length > 0 && data !== undefined) {
            LoginModel.findOneAndDelete({ _id: request.body.id }).then((result) => {

                console.log("result--------", result)
                response.status(200).send({
                    message: "User data deleted successfully",
                    data: result
                })
            })
        } else {
            response.status(404).send({
                message: "User  data not found",
                data: 404
            })
        }
    }).catch((error) => {
        console.log("delUser", error)
        response.status(404).send({
            message: "User  data delete failed ",
            data: 0

        })
    })


})




module.exports = userRouter;













