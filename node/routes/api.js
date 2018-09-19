var express = require('express');
var router = express.Router();


let usersRouter = require('./api/users')
router.use('/users', usersRouter)

let zonasRouter = require('./api/zonas')
router.use('/zonas', zonasRouter)



module.exports = router;