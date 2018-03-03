import axios from 'axios'
import env from '@/env.js'

export default {
  search (query, callback) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&key=${env.BOOKS_API_KEY}`)
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })         
    }
}
