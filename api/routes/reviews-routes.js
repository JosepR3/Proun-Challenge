const Router = require("express").Router;

const { reviewsController } = require("../controllers");

const reviewsRouter = Router();

reviewsRouter.get("/", reviewsController.fetchAllReviews);
// reviewsRouter.get("/tracks/:id", reviewsController.fetchUserById);

module.exports = {
  reviewsRouter: reviewsRouter,
};
