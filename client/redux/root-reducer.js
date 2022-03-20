import { combineReducers } from "redux";

import reviewsReducer from "./reviews/reviews-reducer";

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;
