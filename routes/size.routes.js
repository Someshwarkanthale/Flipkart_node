var express = require('express');
var router = express.Router();
const { addsize, getAllsize, updatesize, deletesize, getAllsizeById } = require('../controller/size.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware')
/* GET users listing. */

router.post('/add',addsize);
router.post('/update/:size_id', updatesize);
router.get('/all',getAllsize);
router.get('/all/:size_id',getAllsizeById);
router.post('/delete/:size_id', deletesize);
router.search('/search');




module.exports = router;
