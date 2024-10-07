var express = require('express');
var router = express.Router();

const { addColorImages , getColorImages, getColorImageById} = require('../controller/imgcolor.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware');
/* GET users listing. */
router.post('/add',upload.array('imgcolor',10),
    //  [body('color_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
    //     .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
    //   ], 
addColorImages);
router.get('/all',getColorImages);
router.get('/all/:id',getColorImageById);







module.exports = router;
