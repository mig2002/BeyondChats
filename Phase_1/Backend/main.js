const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const articleRoutes = require("./routes/articleRoutes");
const cors = require("cors");




const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
