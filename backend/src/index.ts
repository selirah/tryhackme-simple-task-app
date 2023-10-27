import app from "./app.js";
import { connectDB } from "./db/connection.js";

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Running and Connected to DB 🤟")
    );
  })
  .catch((error) => console.log(error));
