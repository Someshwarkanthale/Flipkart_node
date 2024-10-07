var express = require('express');
var router = express.Router();
const { addmenu, getAllmenu, updatemenu, deletemenu, getAllmenuById } = require('../controller/menu.controller');
const { body } = require('express-validator');
const upload =require('../middleware/fileuploader.middleware')
/* GET users listing. */

router.post('/add',upload.single('menu_image'),
     [body('menu_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
     ], 
addmenu);
router.post('/update/:menu_id',upload.single('menu_image'),[body('menu_name').notEmpty().withMessage("Name is Requird Field").isAlpha().withMessage("Name must be in char only")
   .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters long'),
], updatemenu);
router.get('/all',getAllmenu);
router.get('/all/:menu_id',getAllmenuById);
router.post('/delete/:menu_id', deletemenu);
router.search('/search');




module.exports = router;
