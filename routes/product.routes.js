var express = require('express');
var router = express.Router();
// db.sequelize.sync({force:true}); // if you want drop and recreate all tables 

const { addproduct, getAllproduct, updateproduct, deleteproduct, getAllproductById } = require('../controller/product.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware')
/* GET users listing. */
router.post('/add',upload.single('prod_image'),
   //   [body('prod_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   //      .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
   //    ], 
addproduct);
router.post('/update/:prod_id',
    [body('prod_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),],
   upload.single('prod_image'), updateproduct);
router.get('/all',getAllproduct);
router.get('/all/:prod_id',getAllproductById);
router.post('/delete/:prod_id', deleteproduct);
router.search('/search');




module.exports = router;
