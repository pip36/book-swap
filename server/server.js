var express = require('express')
var app = express()
const UserRoutes = require('./routes/users.js')
const BookRoutes = require('./routes/books.js')

var jwt = require('express-jwt')
var jwks = require('jwks-rsa')

var port = process.env.PORT || 8081

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://book-swap.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:8081',
    issuer: "https://book-swap.eu.auth0.com/",
    algorithms: ['RS256']
})

app.use('/user', UserRoutes)
app.use('/books', BookRoutes)




app.get('/unauthorized', function (req, res) {
    res.send('Open Resource')
})

app.get('/authorized', jwtCheck, function (req, res) {
  res.send('Secured Resource')
})

app.listen(port)
