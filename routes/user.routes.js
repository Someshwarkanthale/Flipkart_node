const express = require('express'); 
const router = express.Router();
const{addUser}=require('../controller/user.controller');

router.post('/adduser',addUser);
module.exports=router;