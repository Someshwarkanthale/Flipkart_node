var express = require('express');
var router = express.Router();
const {loginUser}=require('../controller/auth.controller')

router.post('/login',loginUser); // Login user API

module.exports = router;
