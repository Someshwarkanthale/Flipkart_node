const db = require('../model/index');
const sequelize = db.sequelize;
const size = db.size;
const { validationResult } = require('express-validator');

module.exports = {

    addsize: (req, res) => {
        const { sizes, prod_id } = req.body;

        db.size.create({ sizes: JSON.stringify(sizes), prod_id:prod_id }).then(result => {
            res.status(201).send({ message: 'main size  added successfully!', result });
        }).catch(error => {
            console.error('Error adding user:', error);
            res.status(500).send({ error: 'An error occurred while adding the size.' });
        });
    },
    
    // Fetch all records from the 'size' table
    getAllsize: (req, res) => {
        // sequelize.query('SELECT * FROM size')
        db.size.findAll({}).then(data => {

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching size records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },
    getAllsizeById: (req, res) => {
        const size_id = req.params.size_id;

        db.size.findAll({ where: { size_id: size_id } }).then(data => {
            // Check if any data is returned

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching size records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },

   
        updatesize: (req, res) => {
            const size_id = req.params.size_id;
            const { sizes,quantity,scale, prod_id } = req.body;

            db.size.update({ sizes: sizes,quantity:quantity,scale:scale, prod_id:prod_id }, { where: { size_id: size_id } }).then(data => {
                // Check if any data is returned

                // Send the data if records are found
                res.status(200).send({ error: false, data: data });
            })
                .catch(err => {
                    // Log and send the error
                    console.error('Error fetching size records:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        },

        deletesize: (req, res) => {
            const size_id = req.params.size_id;
        
            db.size.destroy({ where: { size_id: size_id } })
                .then(data => {
                    if (data === 0) {
                        // No record found to delete
                        return res.status(404).send({ error: true, message: 'No size record found' });
                    }
                    // Record successfully deleted
                    res.status(200).send({ error: false, message: 'size record deleted successfully' });
                })
                .catch(err => {
                    // Log and send the error
                    console.error('Error deleting size record:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        }

};
