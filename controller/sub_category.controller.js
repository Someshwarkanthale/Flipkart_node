const db = require('../model/index');
const sequelize = db.sequelize;
const sub_category = db.sub_category;
const { validationResult } = require('express-validator');

module.exports = {

    addsub_category: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ error: true, errors: errors.array() });
        } else {

            const { sub_name ,cat_id} = req.body;
            
            db.sub_category.create({ sub_name: sub_name, cat_id:cat_id}).then(result => {
                res.status(201).send({ message: 'main sub_category  added successfully!', result });
            }).catch(error => {
                console.error('Error adding user:', error);
                res.status(500).send({ error: 'An error occurred while adding the sub_category.' });
            });
        }
    },
    
    // Fetch all records from the 'sub_category' table
    getAllsub_category: (req, res) => {
        // sequelize.query('SELECT * FROM sub_category')
        db.sub_category.findAll({}).then(data => {

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching sub_category records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },
    getAllsub_categoryById: (req, res) => {
        const sub_id = req.params.sub_id;

        db.sub_category.findAll({ where: { sub_id: sub_id } }).then(data => {
            // Check if any data is returned

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching sub_category records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },

   
        updatesub_category: (req, res) => {
            const sub_id = req.params.sub_id;
            const { sub_name,cat_id } = req.body;

            db.sub_category.update({ sub_name: sub_name, cat_id :cat_id}, { where: { sub_id: sub_id } }).then(data => {
                // Check if any data is returned

                // Send the data if records are found
                res.status(200).send({ error: false, data: data });
            })
                .catch(err => {
                    // Log and send the error
                    console.error('Error fetching sub_category records:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        },

        deletesub_category: (req, res) => {
            const sub_id = req.params.sub_id;
        
            db.sub_category.destroy({ where: { sub_id: sub_id } })
                .then(data => {
                    if (data === 0) {
                        // No record found to delete
                        return res.status(404).send({ error: true, message: 'No sub_category record found' });
                    }
                    // Record successfully deleted
                    res.status(200).send({ error: false, message: 'sub_category record deleted successfully' });
                })
                .catch(err => {
                    // Log and send the error
                    console.error('Error deleting sub_category record:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        }

};
