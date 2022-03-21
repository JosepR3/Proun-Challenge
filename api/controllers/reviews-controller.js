const axios = require('axios');

async function fetchAllReviews(req, res){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5');
  // getting ramdomly from 0 to 5 to don't bring all the info
    if(response.data){

    return res.send({
      data: response.data,
      error: null
    });
  }
  else if(response.error){
    console.log("something went wrong with the database");
  };
}

module.exports = {
  fetchAllReviews: fetchAllReviews
}