const mongoose = require("mongoose")


const URL = "mongodb+srv://vicky:MqdWliDIYQXnqa4w@cluster0.o1i4r.mongodb.net/Assignment?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

const dbConnection = () => {

    mongoose.
    connect(URL, connectionParams)
    .then(() => {
        console.log("Connected to DB successfully !")
    })
    .catch((error) => {
        console.log("Failed to connect DB", error)
    })

}



module.exports = dbConnection