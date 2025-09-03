import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("DB CONNECTION FAILED : ", error);
  }
};

export default db;
