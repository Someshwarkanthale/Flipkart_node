const db = require('../model/index');
const sequelize = db.sequelize;
const master = db.master;
const { validationResult } = require('express-validator');

module.exports = {

    addMaster: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ error: true, errors: errors.array() });
        } else {

            const { master_name, master_description } = req.body;
            let master_image;

            // Single if-else block to handle image assignment
            if (req.file) {
                master_image = req.file.filename; // If a file is uploaded, use its filename
            } else {
                master_image = 'default.jpg'; // If no file is uploaded, use the default image
            }

            db.master.create({ master_name: master_name, master_description: master_description, master_image: master_image }).then(result => {
                res.status(201).send({ message: 'main master added successfully!', result });
            }).catch(error => {
                console.error('Error adding master:', error);
                res.status(500).send({ error: 'An error occurred while adding the master.' });
            });
        }
    },
    
    // Fetch all records from the 'master' table
    getAllmaster: (req, res) => {
        
        // /sequelize.query('SELECT * FROM master')
        db.master.findAll({}).then(data => {

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching master records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },
    getAllmasterById: (req, res) => {
        const master_id = req.params.master_id;

        db.master.findAll({ where: { master_id: master_id } }).then(data => {
            // Check if any data is returned

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching master records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },

   
        updateMaster: (req, res) => {
            const master_id = req.params.master_id;
            const { master_name, master_description} = req.body;
            let master_image;

            // Single if-else block to handle image assignment
            if (req.file) {
                master_image = req.file.filename; // If a file is uploaded, use its filename
            } else {
                master_image = 'default.jpg'; // If no file is uploaded, use the default image
            }

            db.master.update({ master_name: master_name, master_description: master_description, master_image: master_image  }, { where: { master_id: master_id } }).then(data => {
                // Check if any data is returned

                // Send the data if records are found
                res.status(200).send({ error: false, data: data });
            })
                .catch(err => {
                    // Log and send the error
                    console.error('Error fetching master records:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        },

        deleteMaster: (req, res) => {
            const master_id = req.params.master_id;
        
            db.master.destroy({ where: { master_id: master_id } })
                .then(data => {
                    if (data === 0) {
                        // No record found to delete
                        return res.status(404).send({ error: true, message: 'No master record found' });
                    }
                    // Record successfully deleted
                    res.status(200).send({ error: false, message: 'Master record deleted successfully' });
                })
                .catch(err => {
                    // Log and send the error
                    console.error('Error deleting master record:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        }
        

};
