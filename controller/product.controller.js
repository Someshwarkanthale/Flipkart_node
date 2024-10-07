const db = require('../model/index');
const sequelize = db.sequelize;
const product = db.product;
const { validationResult } = require('express-validator');

module.exports = {

    addproduct: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ error: true, errors: errors.array() });
        } else {

            const { prod_name, prod_description, prod_price, prod_discount, createdBy, sub_id } = req.body;
            let prod_image;

            // Single if-else block to handle image assignment
            if (req.file) {
                prod_image = req.file.filename; // If a file is uploaded, use its filename   
            } else {
                prod_image = 'default.jpg'; // If no file is uploaded, use the default image
            }

            db.product.create({ prod_name: prod_name, prod_description: prod_description, prod_image: prod_image,prod_price:prod_price,prod_discount:prod_discount, createdBy:createdBy,sub_id:sub_id}).then(result => {
                res.status(201).send({ message: 'main product added successfully!', result });
            }).catch(error => {
                console.error('Error adding user:', error);
                res.status(500).send({ error: 'An error occurred while adding the user.' });
            });
        }
    },
    
    // Fetch all records from the 'product' table
    getAllproduct: (req, res) => {                              //include:db.subcat
                                                                //include:{model:db.sub_category,include:db.category}
                                                                //{include:{all:true,nested:true/false}}
        // /sequelize.query('SELECT * FROM product')
        db.product.findAll({}).then(data => {

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching product records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },
    getAllproductById: (req, res) => {
        const prod_id = req.params.prod_id;

        db.product.findAll({ where: { prod_id: prod_id } }).then(data => {
            // Check if any data is returned

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching product records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },

   
        updateproduct: (req, res) => {
            const prod_id = req.params.prod_id;
            const { prod_name, prod_description, prod_price,prod_discount} = req.body;
            let prod_image;

            // Single if-else block to handle image assignment
            if (req.file) {
                prod_image = req.file.filename; // If a file is uploaded, use its filename
            } else {
                prod_image = 'default.jpg'; // If no file is uploaded, use the default image
            }

            db.product.update({ prod_name: prod_name, prod_description: prod_description, prod_image: prod_image,prod_price:prod_price,prod_discount:prod_discount  }, { where: { prod_id: prod_id } }).then(data => {
                // Check if any data is returned

                // Send the data if records are found
                res.status(200).send({ error: false, data: data });
            })
                .catch(err => {
                    // Log and send the error
                    console.error('Error fetching product records:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        },

        deleteproduct: (req, res) => {
            const prod_id = req.params.prod_id;
        
            db.product.destroy({ where: { prod_id: prod_id } })
                .then(data => {
                    if (data === 0) {
                        // No record found to delete
                        return res.status(404).send({ error: true, message: 'No product record found' });
                    }
                    // Record successfully deleted
                    res.status(200).send({ error: false, message: 'product record deleted successfully' });
                })
                .catch(err => {
                    // Log and send the error
                    console.error('Error deleting product record:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        }

};
