import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING || "", {
    dbName: process.env.MONGO_DBNAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => console.log("Successfuly connected to mongoDB"));
