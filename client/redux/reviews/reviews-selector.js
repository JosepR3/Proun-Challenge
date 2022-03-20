import { createSelector } from "reselect";

export const selectReviewsState = (state) => state.reviews;

export const reviewsSelector = createSelector([selectReviewsState], (reviews) => reviews);
