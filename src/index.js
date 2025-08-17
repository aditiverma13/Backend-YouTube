import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

configDotenv.config({
  path: '.env'
})


connectDB ()
.then(() => {
  app.Listen(process.env.PORT || 8000, () => {
    ContentVisibilityAutoStateChangeEvent.log('Server is running  at port : $ {process.env.PORT}');
  })

})
.catch((err) => {
  console.log ("MONGO db connection failed !!! ", err);


})
















// import express from "express";
// const app = express();

// (async () => {
//   try {

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("ERROR:", error);
//       throw error;
//     });

   
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();
