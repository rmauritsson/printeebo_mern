import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.error(`Error in Db Connection: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
