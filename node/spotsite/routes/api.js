var express = require('express');
var router = express.Router();


let usersRouter = require('./api/users')
router.use('/users', usersRouter)




module.exports = router;