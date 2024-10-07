var express = require('express');
var router = express.Router();
const { addcategory, getAllcategory, updatecategory, deletecategory, getAllcategoryById } = require('../controller/category.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware')
/* GET users listing. */

router.post('/add',upload.single('cat_image'),
   //   [body('cat_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   //      .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
   //   ], 
addcategory);
router.post('/update/:cat_id',upload.single('cat_image'),[body('cat_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
], updatecategory);
router.get('/all',getAllcategory);
router.get('/all/:cat_id',getAllcategoryById);
router.post('/delete/:cat_id', deletecategory);
router.search('/search');




module.exports = router;
