const express = require("express");
const UserModel = require("../model/UserModel")
const userRouter = express.Router();
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const moment = require("moment");




/*

* url:http://localhost:5000/user/addUser
* method: POST

* need: register new user if mode is 0
* body: {
*      "username": "vicky M",
*      "level": 5,
*      "clientId":7,
*      "insertMode": 0,
*      "product": "car",
*      "group": 2,
*      "bankname": "indian Bank",
*      "bankcode": "Ind123573",
*      "mobileno": 1234678907,
*      "usertype": 8,
*      "active": true 
*    }

* need: updates the exixiting  user if mode is 1
* body: {
*      "username": "vicky M",
*      "level": 5,
*      "clientId":7,
*      "insertMode": 1,
*      "product": "car",
*      "group": 2,
*      "bankname": "indian Bank",
*      "bankcode": "Ind123573",
*      "mobileno": 1234678907,
*      "usertype": 8,
*      "active": true,
*       "id":4 
*    }

*/

userRouter.post('/addUser', function (request, response) {

    console.log("body addUser", request.body)

    var entitySchema = mongoose.Schema({
        testvalue: { type: Number }
    });

    console.log("entitySchema", entitySchema.$id)

    const UserDoc = new UserModel({
        id: entitySchema.$id,
        insertMode: request.body.insertMode,
        username: request.body.username,
        clientId: request.body.clientId,
        level: request.body.level,
        product: request.body.product,
        group: request.body.group,
        bankname: request.body.bankname,
        bankcode: request.body.bankcode,
        mobileno: request.body.mobileno,
        usertype: request.body.usertype,
        active: request.body.active,
        created: moment().format('MMMM Do YYYY, h:mm:ss a')
    })

    if (request.body.insertMode === 0) {
        console.log("insert")
        UserModel.findOne({ mobileno: request.body.mobileno })
            .then((users) => {
                if (users) {
                    response.status(200).send({
                        data: {
                            message: "User exists",
                            data: request.body.mobileno,
                            status: 401
                        }
                    })
                }
                else {
                    console.log("insert 1")

                    UserDoc.save()
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
                            console.log("err", error)
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

        UserModel.findOne({ mobileno: request.body.mobileno })
            .then((users) => {
                console.log("users", users)
                if (users) {
                    response.status(200).send({
                        data: {
                            message: "User Mobile No exists",
                            data: request.body.mobileno,
                            status: 401
                        }
                    })
                } else {
                    console.log("insert update")

                    const updatedValue = {
                        // id: entitySchema.$id,
                        insertMode: request.body.insertMode,
                        // username: request.body.username,
                        level: request.body.level,
                        product: request.body.product,
                        group: request.body.group,
                        // bankname: request.body.bankname,
                        // bankcode: request.body.bankcode,
                        mobileno: request.body.mobileno,
                        usertype: request.body.usertype,
                        active: request.body.active,
                        modified: moment().format('MMMM Do YYYY, h:mm:ss a')
                    }

                    const filterValue = { id: request.body.id }

                    // console.log("updatevale", updatedValue)

                    UserModel.findOneAndUpdate(filterValue, updatedValue, { upsert: true, new: true, setDefaultsOnInsert: true })
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
* url:http://localhost:5000/user/viewUser
* method: POST
* body : {
*           "clientId":7
*       }
*/

userRouter.post('/viewUser', function (request, response) {

    UserModel.find({ clientId: request.body.clientId }).then((data) => {
        console.log("data", data)

        if (data && data.length > 0 && data !== undefined) {

            response.status(200).send({
                message: "User data fetched successfully",
                data: data
            })
        } else {
            response.status(404).send({
                message: "User  data not found",
                data: []
            })
        }
    }).catch((error) => {
        response.status(404).send({
            message: "User  data  failed to fetch ",
            data: 0

        })
    })


})




module.exports = userRouter;













