import * as ReviewsTypes from "./reviews-types";


export function setReviewsResult(result) {
    return { type: ReviewsTypes.SET_REVIEWS, payload: result };
}

export async function fetchAllReviews(dispatch) {
  try {
    
    return dispatch(setReviewsResult(res.data.data));
  } catch (error) {
    console.log(error, "fetcherror");
  }
}