import express from "express";
import path from "path";

const app = express();
const SERVER_PORT = 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// Static Routes
app.use(
  "/videos",
  express.static(path.join(__dirname, "..", "static", "videos"))
);

// Init
/* eslint-disable-next-line no-console */
app.listen(SERVER_PORT, () => {
  console.log(`The videoserver is listening on port ${SERVER_PORT} !`);
});
