const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server job portal ${data.connection.host}`);
    })
    .catch((error) => console.log("Error in connecting mongodb", error));
};

module.exports = connectDatabase;
