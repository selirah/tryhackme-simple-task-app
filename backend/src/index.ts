import app from "./app";
import { connectDB } from "./db/connection";

const PORT = process.env.PORT || 4000;

const main = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server Running and Connected to DB! 🤟");
    });
  } catch (error) {
    console.log("DB CONNECT ERROR: ", error);
  }
};

main();
