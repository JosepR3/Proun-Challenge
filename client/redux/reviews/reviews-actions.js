import * as ReviewsTypes from "./reviews-types";
import api from "../../api/api";

export function setReviewsResult(result) {
  return { type: ReviewsTypes.SET_REVIEWS, payload: result };
}

export async function fetchAllReviews(dispatch) {
  try {
    const res = await api.fetchAllReviews();
    return dispatch(setReviewsResult(res.data.data));
  } catch (error) {
    console.log(error, "fetcherror");
  }
}
