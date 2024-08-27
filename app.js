// app.js
const express = require("express");
const path = require("path");
const app = express();

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
