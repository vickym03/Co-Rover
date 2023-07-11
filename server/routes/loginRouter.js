const express = require("express");
const LoginModel = require("../model/LoginModel");
const loginRouter = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
let tokenList = {};
const authentication = require("../middleware/auth");

/*

* url:http://localhost:5000/login/register
* method: POST
* body: {
*   "name": "vickyM",
*   "password": "12345",
* }

*/

loginRouter.post("/register", function (request, response) {
  var entitySchema = mongoose.Schema({
    testvalue: { type: Number },
  });

  console.log("entitySchema", entitySchema.$id);

  const LoginDoc = new LoginModel({
    name: request.body.name,
    password: request.body.password,
    created: new Date(),
    modified: new Date(),
    id: entitySchema.$id,
    clientId: entitySchema.$id,
  });

  console.log("LoginDoc", LoginDoc);
  if (request.body) {
    console.log("request.body.mode", request.body);

    LoginModel.findOne({ name: request.body.name }).then((users) => {
      if (users) {
        response.status(200).send({
          data: {
            message: "User exists",
            data: request.body.name,
            status: 401,
          },
        });
      } else {
        LoginDoc.save()
          .then((result) => {
            console.log("res", result);
            response.status(201).send({
              data: {
                message: "User created successfully",
                data: result,
                status: 201,
              },
            });
          })

          .catch((error) => {
            response.status(404).send({
              data: {
                message: "User created failed",
                data: error,
              },
            });
          });
      }
    });
  } else {
    LoginModel.findOne({ name: request.body.name }).then((users) => {
      if (users) {
        response.status(200).send({
          data: {
            message: "User exists",
            data: request.body.name,
            status: 401,
          },
        });
      } else {
        const updatedValue = {
          name: request.body.name,
          password: request.body.password,
          created: new Date(),
          modified: new Date(),
        };

        const filterValue = { _id: request.body.id };

        // console.log("updatevale", updatedValue)

        LoginModel.findOneAndUpdate(filterValue, updatedValue, {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        })
          .then((result) => {
            // console.log("up", result)
            response.status(201).send({
              data: {
                message: "User updated successfully",
                data: result,
                status: 201,
              },
            });
          })
          .catch((error) => {
            response.status(404).send({
              data: {
                message: "User updated failed",
                data: error,
              },
            });
          });
      }
    });
  }
});

/*

* url:http://localhost:5000/login/login
* method: POST
* body: {
*  "name": "vickyM",
*  "password": "12345"
* }
 
*/

loginRouter.post("/login", function (request, response) {
  // console.log("request.body", request.body);
  LoginModel.findOne({ name: request.body.name }).then((users) => {
    if (users === null) {
      response.send({
        data: {
          message: "Data not found please register",
          status: 404,
          login: false,
        },
      });
    } else if (request.body.password === users.password) {
      //   create JWT token
      const accesstoken = jwt.sign(
        {
          name: users.name,
          password: users.password,
        },
        "RANDOM-TOKEN",
        { expiresIn: "35m" }
      );

      const refreshToken = jwt.sign(
        {
          name: users.name,
          password: users.password,
        },
        "RANDOM-TOKEN",
        { expiresIn: "25m" }
      );
      console.log("token:", accesstoken);
      tokenList[refreshToken] = response;
      response.send({
        data: {
          status: 200,
          message: "login success",
          data: users,
          login: true,
          accessToken: accesstoken,
          refreshToken: refreshToken,
        },
      });
    } else {
      response.send({
        data: {
          message: "login failed",
          status: 400,
          login: false,
        },
      });
    }
  });
});

/*

* url:http://localhost:5000/login/token
* method: POST'
*  body :{
*  token : "  "
*}

*/

loginRouter.post("/token", function (request, response) {
  console.log("request.body.refreshToken", request.body.refreshToken);
  // refresh the damn token
  // if refresh token exists
  if (request.body.refreshToken && request.body.refreshToken in tokenList) {
    const user = {
      name: request.body.name,
      password: request.body.password,
    };
    const token = jwt.sign(user, "RANDOM-TOKEN", {
      expiresIn: "15m",
    });

    // update the token in the list
    tokenList[request.body.refreshToken].token = token;
    response.send({
      data: {
        message: "successfully refreshed",
        Token: token,
        status: 200,
      },
    });
  } else {
    response.send({
      data: {
        message: "error in  refresh",
        status: 404,
      },
    });
  }
});

/*

* url:http://localhost:5000/login/logout
* method: POST
* body: {
*   "refreshToken":REFERSH TOKEN WHILE LOGIN 
* }
 
*/
loginRouter.post("/logout", function (request, response) {
  const logoutkn = request.body.refreshToken;
  if (logoutkn && logoutkn in tokenList) {
    tokenList = {};
    response.send({
      data: {
        msg: "You have been Logged Out",
        status: 200,
      },
    });
  } else {
    response.send({
      data: {
        msg: "Logged Out error",
        status: 404,
      },
    });
  }
});

/*

* url:http://localhost:5000/login/userlist
* method: GET 

*/

loginRouter.get("/userlist", function (request, response) {
  LoginModel.find({})
    .then((result) => {
      response.status(200).send({
        message: "User data fetched successfully",
        data: result,
      });
    })
    .catch((error) => {
      response.status(404).send({
        message: "User  data fetch failed ",
        data: error,
      });
    });
});

/*
 * url:http://localhost:5000/login/delUser
 * method: POST
 */

loginRouter.post("/delUser", function (request, response) {
  LoginModel.find({ clientId: request.body.clientId })
    .then((data) => {
      // console.log("data", data && data.length > 0 && data !== undefined)

      if (data && data.length > 0 && data !== undefined) {
        LoginModel.findOneAndDelete({ clientId: request.body.clientId }).then(
          (result) => {
            console.log("result--------", result);
            response.status(200).send({
              message: "User data deleted successfully",
              data: result,
            });
          }
        );
      } else {
        response.status(404).send({
          message: "User  data not found",
          data: 404,
        });
      }
    })
    .catch((error) => {
      console.log("delUser", error);
      response.status(404).send({
        message: "User  data delete failed ",
        data: 0,
      });
    });
});

module.exports = loginRouter;
