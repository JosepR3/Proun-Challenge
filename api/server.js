const express = require("express");
 const cors = require("cors");
const { json } = require("body-parser");
const helmet = require("helmet");

const { reviewsRouter } = require("./routes");

const app = express();

app.use(json());
app.use(helmet())
app.use(
   cors({
     origin: "http://localhost:3000",
   }),
 );

app.use(reviewsRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

module.exports = {
  app: app
};