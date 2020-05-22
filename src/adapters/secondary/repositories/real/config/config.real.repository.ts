import mongoose from "mongoose";

export default class ConfigRepository {
  public static connect() {
    return mongoose.connect("mongodb://localhost:27017/mon-registre-development", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }
  public static async close() {
    return mongoose.disconnect();
  }
}
