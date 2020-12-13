import mongoose from "mongoose";

const initMongoose = (): void => {
  if (process.env.MONGODB_CONNECTION_STRING) {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export default initMongoose;
