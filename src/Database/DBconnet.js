const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const dataBaseInstance = await mongoose.connect(
      process.env.MONGODB_DATABASE_URL || ""
    );
    console.log("connected",dataBaseInstance);
    
    
  } catch (error) {
    console.log("connection error", error);
  }
};
module.exports = { dbConnect };
