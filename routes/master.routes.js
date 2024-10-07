var express = require('express');
var router = express.Router();
// db.sequelize.sync({force:true}); // if you want drop and recreate all tables 

const { addMaster, getAllmaster, updateMaster, deleteMaster, getAllmasterById } = require('../controller/master.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware');
/* GET users listing. */
router.post('/add',upload.single('master_image'),
     [body('master_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
      ], 
addMaster);
router.post('/update/:master_id',
    [body('master_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),],
   upload.single('master_image'), updateMaster);
router.get('/all',getAllmaster);
router.get('/all/:master_id',getAllmasterById);
router.delete('/delete/:master_id', deleteMaster);
router.search('/search');




module.exports = router;
