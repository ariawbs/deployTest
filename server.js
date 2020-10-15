require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_, res) => res.json({ message: "Hello wonderer" }));

app.listen(port, () => console.info(`Server running on port ${port}`));
