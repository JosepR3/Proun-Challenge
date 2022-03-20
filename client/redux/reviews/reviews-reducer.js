import initState from "./reviews-state";
import { FETCH_REVIEWS, SET_REVIEWS } from "./reviews-types";

const reviewsReducer = (state = initState, action) => {

  switch (action.type){
    case SET_REVIEWS: {
      return { 
        ...state,
          reviews: action.payload
      };
    }
    default: 
      return {...state};
  }
}

export default reviewsReducer