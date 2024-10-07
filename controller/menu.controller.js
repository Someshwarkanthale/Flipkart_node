const db = require('../model/index');
const sequelize = db.sequelize;
const menu = db.menu;
const { validationResult } = require('express-validator');

module.exports = {

    addmenu: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ error: true, errors: errors.array() });
        } else {

            const { menu_name, master_id } = req.body;

            db.menu.create({ menu_name: menu_name, master_id:master_id }).then(result => {
                res.status(201).send({ message: 'main menu  added successfully!', result });
            }).catch(error => {
                console.error('Error adding user:', error);
                res.status(500).send({ error: 'An error occurred while adding the menu.' });
            });
        }
    },
    
    // Fetch all records from the 'menu' table
    getAllmenu: (req, res) => {
        // sequelize.query('SELECT * FROM menu')
        db.menu.findAll({}).then(data => {

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching menu records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },
    getAllmenuById: (req, res) => {
        const menu_id = req.params.menu_id;

        db.menu.findAll({ where: { menu_id: menu_id } }).then(data => {
            // Check if any data is returned

            // Send the data if records are found
            res.status(200).send({ error: false, data: data });
        })
            .catch(err => {
                // Log and send the error
                console.error('Error fetching menu records:', err);
                res.status(500).send({ error: true, message: err.message });
            });
    },

   
        updatemenu: (req, res) => {
            const menu_id = req.params.menu_id;
            const { menu_name, master_id } = req.body;

            db.menu.update({ menu_name: menu_name, master_id:master_id}, { where: { menu_id: menu_id } }).then(data => {
                // Check if any data is returned

                // Send the data if records are found
                res.status(200).send({ error: false, data: data });
            })
                .catch(err => {
                    // Log and send the error
                    console.error('Error fetching menu records:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        },

        deletemenu: (req, res) => {
            const menu_id = req.params.menu_id;
        
            db.menu.destroy({ where: { menu_id: menu_id } })
                .then(data => {
                    if (data === 0) {
                        // No record found to delete
                        return res.status(404).send({ error: true, message: 'No menu record found' });
                    }
                    // Record successfully deleted
                    res.status(200).send({ error: false, message: 'menu record deleted successfully' });
                })
                .catch(err => {
                    // Log and send the error
                    console.error('Error deleting menu record:', err);
                    res.status(500).send({ error: true, message: err.message });
                });
        }

};
