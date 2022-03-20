const axios = require('axios');

function fetchAllReviews(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

// async function fetchUserById(id) {
//     try {

//     } catch(error){

//     }
// }

module.exports = {
  fetchAllReviews: fetchAllReviews,
  // fetchUserById: fetchUserById
}