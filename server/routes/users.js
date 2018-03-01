var router = require('express').Router()

router.get('/:userId', function (req, res) {
  res.send('get user with an id')
})

module.exports = router