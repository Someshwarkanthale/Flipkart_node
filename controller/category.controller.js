const db = require('../model/index');
const sequelize = db.sequelize;
const category = db.category;
const { validationResult } = require('express-validator');

module.exports = {

    addcategory: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ error: true, errors: errors.array() });
        } else {

            const { cat_name,menu_id} = req.body;

            db.category.create({ cat_name: cat_name ,menu_id:menu_id}).then(result => {
                res.status(201).send({ message: 'main category added successfully!', result });
            }).catch(error => {
                console.error('Error adding user:', error);
                res.status(500).send({ error: 'An error occurred while adding the category.' });
            });
        }
    },
    
    // Fetch all records from the 'category' table
    getAllcategory: (req, res) => {
        // sequelize.query('SELECT * FROM category')
        db.category.findAll({}).then(data => {

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching category records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },
    getAllcategoryById: (req, res) => {
        const cat_id = req.params.cat_id;

        db.category.findAll({ where: { cat_id: cat_id } }).then(data => {
            // Check if any data is returned

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching category records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },

   
        updatecategory: (req, res) => {
            const cat_id = req.params.cat_id;
            const { cat_name,menu_id } = req.body;

            db.category.update({ cat_name: cat_name ,menu_id:menu_id}, { where: { cat_id: cat_id } }).then(data => {
                // Check if any data is returned

                // Send the data if records are found
                res.status(200).send({ error: false, data: data });
            })
                .catch(err => {
                    // Log and send the error
                    console.error('Error fetching category records:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        },

        deletecategory: (req, res) => {
            const cat_id = req.params.cat_id;
        
            db.category.destroy({ where: { cat_id: cat_id } })
                .then(data => {
                    if (data === 0) {
                        // No record found to delete
                        return res.status(404).send({ error: true, message: 'No category record found' });
                    }
                    // Record successfully deleted
                    res.status(200).send({ error: false, message: 'category record deleted successfully' });
                })
                .catch(err => {
                    // Log and send the error
                    console.error('Error deleting cat record:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        }

};
