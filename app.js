// app.js
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
require("dotenv").config();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));

// Serve static assets (HTML pages)
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
