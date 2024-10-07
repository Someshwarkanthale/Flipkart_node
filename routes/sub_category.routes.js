var express = require('express');
var router = express.Router();
const { addsub_category, getAllsub_category, updatesub_category, deletesub_category, getAllsub_categoryById } = require('../controller/sub_category.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware')
/* GET users listing. */

router.post('/add',upload.single('sub_image'),
   //   [body('sub_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   //      .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
   //   ], 
addsub_category);
router.post('/update/:sub_id',upload.single('sub_image'),[body('sub_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
], updatesub_category);
router.get('/all',getAllsub_category);
router.get('/all/:sub_id',getAllsub_categoryById);
router.post('/delete/:sub_id', deletesub_category);
router.search('/search');




module.exports = router;
