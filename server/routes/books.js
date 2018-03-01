var router = require('express').Router()

router.get('/search/:query', function (req, res) {
  res.send('search for a book with title')
})

module.exports = router
