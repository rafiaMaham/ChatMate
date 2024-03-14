import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectMongo from "./db/connectMongo.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
app.use(express.json())

app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
  connectMongo();
  console.log(`server is running at ${PORT}`);
});
