const express = require("express");
const UserModel = require("../model/UserModel");
const userRouter = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const GraphDashModel = require("../model/GraphDashModel");
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

userRouter.post("/addUser", function (request, response) {
  console.log("body addUser", request.body);

  var entitySchema = mongoose.Schema({
    testvalue: { type: Number },
  });

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
    created: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });

  if (request.body.insertMode === 0) {
    console.log("insert mode 0");
    UserModel.findOne({
      mobileno: request.body.mobileno,
      clientId: request.body.clientId,
    }).then((users) => {
      if (users) {
        console.log("insert mode 0 mobile exists");

        response.status(200).send({
          data: {
            message: "Can't save. Mobile exists with another User",
            data: users.username,
            status: 405,
          },
        });
      } else {
        console.log("inserted");

        UserDoc.save()
          .then((result) => {
            // console.log("res", result)
            response.status(200).send({
              data: {
                message: "User created successfully",
                data: result,
                status: 200,
              },
            });
          })

          .catch((error) => {
            console.log("err  created failed", error);
            response.status(404).send({
              data: {
                message: "User created failed",
                // data: error
              },
            });
          });
      }
    });
  } else {
    console.log("inserted mode 1 update");

    UserModel.findOne({
      mobileno: request.body.mobileno,
      clientId: request.body.clientId,
    }).then((users) => {
      if (users !== null && users.id !== request.body.id) {
        response.status(200).send({
          data: {
            message: "Can't update. Mobile exists with another User",
            dataStatus: users.username,
            status: 403,
          },
        });
      } else {
        console.log("updated update");

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
          modified: moment().format("MMMM Do YYYY, h:mm:ss a"),
        };

        const filterValue = {
          id: request.body.id,
          clientId: request.body.clientId,
        };

        // console.log("updatevale", updatedValue)

        UserModel.findOneAndUpdate(filterValue, updatedValue, {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        })
          .then((result) => {
            console.log("up", result);
            response.status(201).send({
              data: {
                message: "User updated successfully",
                data: result,
                status: 201,
              },
            });
          })
          .catch((error) => {
            console.log("error updated failed", error);
            response.status(404).send({
              data: {
                message: "User updated failed",
                // data: error
              },
            });
          });
      }
    });
  }
});

/*
 * url:http://localhost:5000/user/viewUser
 * method: POST
 * body : {
 *           "clientId":7
 *       }
 */

userRouter.post("/viewUser", function (request, response) {
  UserModel.find({ clientId: request.body.clientId })
    .then((data) => {
      // console.log("data", data)

      if (data && data.length > 0 && data !== undefined) {
        response.status(200).send({
          data: {
            message: "User data fetched successfully",
            data: data,
            status: 200,
          },
        });
      }
    })
    .catch((error) => {
      console.log("error data  failed to fetch", error);
      response.status(404).send({
        message: "User  data  failed to fetch ",
        data: 0,
      });
    });
});

/*
 * url:http://localhost:5000/user/graphDash
 * method: POST
 * body : {
 *            "date":"05-07-2023"
 *       }
 */

userRouter.post("/graphDash", function (request, response) {
  console.log("resp", request.body.date);
  GraphDashModel.findOne({ date: request.body.date })
    .then((data) => {
      if (data && data !== undefined) {
        response.status(200).send({
          data: {
            message: "Graph data fetched successfully",
            data: data,
            status: 200,
          },
        });
      } else {
        response.status(200).send({
          data: {
            message: "Graph data fetched successfully",
            data: 0,
            status: 200,
          },
        });
      }
    })
    .catch((error) => {
      console.log("error Graph  data  failed", error);
      response.status(404).send({
        message: "Graph  data  failed to fetch ",
        data: 0,
      });
    });
});

module.exports = userRouter;
