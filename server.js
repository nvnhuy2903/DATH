const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
require("dotenv").config({path: "./config/.env"});

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));
