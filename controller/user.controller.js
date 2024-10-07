const db =require('../model/index');
const sequelize = db.sequelize;
const User = db.user;
const sendMail=require('../middleware/sendmail')

module.exports = {
    // Add a new user
    addUser: async (req, res) => {
        const { user_name, user_email, user_pass, user_mob, user_address } = req.body;

        try {
            // Insert user into the database using Sequelize
            const newUser = await User.create({
                user_name,
                user_email,
                user_pass,
                user_mob,
                user_address
            });

            console.log('User added successfully:', newUser);

            // Send email after inserting user
            sendMail(user_name, user_email);

            res.status(200).send({ error: false, message: 'User added and email sent!', data: newUser });
        } catch (err) {
            console.error('Error inserting user:', err);
            res.status(500).send({ error: true, message: 'Failed to add user' });
        }
    },

    // Update an existing user
    updateUser: async (req, res) => {
        const { user_id } = req.params;
        const { user_name, user_email, user_pass, user_mob, user_address } = req.body;

        try {
            // Update the user in the database
            const updatedUser = await User.update(
                { user_name, user_email, user_pass, user_mob, user_address },
                { where: { user_id } }
            );

            if (updatedUser[0] === 0) {
                return res.status(404).send({ error: true, message: 'User not found' });
            }

            res.status(200).send({ error: false, message: 'User updated successfully' });
        } catch (err) {
            console.error('Error updating user:', err);
            res.status(500).send({ error: true, message: 'Failed to update user' });
        }
    },

    // Delete a user
    deleteUser: async (req, res) => {
        const { user_id } = req.params;

        try {
            // Delete user from the database
            const result = await User.destroy({ where: { user_id } });

            if (result === 0) {
                return res.status(404).send({ error: true, message: 'User not found' });
            }

            res.status(200).send({ error: false, message: 'User deleted successfully' });
        } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).send({ error: true, message: 'Failed to delete user' });
        }
    },

    // Get all users
    getUsers: async (req, res) => {
        try {
            // Fetch all users from the database
            const users = await User.findAll();

            res.status(200).send({ error: false, data: users });
        } catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).send({ error: true, message: 'Failed to fetch users' });
        }
    },

    // Get a single user by ID
    getUserById: async (req, res) => {
        const { user_id } = req.params;

        try {
            // Fetch a user by ID from the database
            const user = await User.findOne({ where: { user_id } });

            if (!user) {
                return res.status(404).send({ error: true, message: 'User not found' });
            }

            res.status(200).send({ error: false, data: user });
        } catch (err) {
            console.error('Error fetching user by ID:', err);
            res.status(500).send({ error: true, message: 'Failed to fetch user' });
        }
    }
};
