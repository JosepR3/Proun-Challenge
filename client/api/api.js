import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {

    function fetchAllReviews(headers) {
      return request({
        url: "/reviews",
        requestMethod: "GET",
        headers: headers,
      });
    }
  
    return {
      fetchAllReviews: fetchAllReviews
    };
  }
export default makeApi();