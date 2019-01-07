var express = require('express');
var router = express.Router();
const axios = require('axios');

// /* GET users listing. */
// router.get('/cats', function(req, res, next) {
//     axios
//         .get('https://api.thecatapi.com/v1/images/search?limit=5&amp%3Bpage=10&amp%3Border=Desc')
//         .then(function(result) {
//             const cats = result.data.map(function(cat) {
//                 return {
//                     id: cat.id,
//                     photo: cat.url
//                 }
//             })

//             res.json(cats);
//         })
// });
const books = [{
    isbn: 1111
}];

router.post('/books', function(req, res, next) {
    const newBook = req.body;
    books.push(newBook);
    console.log(books);
    res.json(books);


})

router.get('/books', function(req, res) {
    res.json(books);
})

module.exports = router;