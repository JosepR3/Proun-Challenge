const express = require("express");

const { json } = require("body-parser");

const { reviewsRouter } = require("./routes");


const app = express();

app.use(json());

app.use(reviewsRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

module.exports = {
  app: app
};