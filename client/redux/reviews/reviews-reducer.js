import initState from "./reviews-state";
import { SET_REVIEWS } from "./reviews-types";

const reviewsReducer = (state = initState, action) => {

  switch (action.type){
    case SET_REVIEWS: {
      console.log(action.payload)
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