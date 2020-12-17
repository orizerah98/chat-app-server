import mongoose from "mongoose";

const initMongoose = (): void => {
  if (process.env.MONGODB_CONNECTION_STRING) {
    mongoose.set("useCreateIndex", true);
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } else {
    throw new Error(
      `Couldn't connect to mongo on "${process.env.MONGODB_CONNECTION_STRING}"`
    );
  }
};

export default initMongoose;
