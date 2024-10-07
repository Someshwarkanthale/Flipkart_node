
const db = require('../model/index');
const sequelize = db.sequelize;
const Color = db.color;
const imgcolor = db.imgcolor;

module.exports = {
    // Add a new color with associated images
    addColorImages: async (req, res) => {
        const { color_name, prod_id } = req.body;
        let img_url = 'default.jpg';

        if (req.files.length > 0) {
            img_url = req.files[0].filename; // Get the first image filename
        }

        try {
            // Insert into 'color' table
            const color = await Color.create({
                color_name,
                color_image: img_url,
                prod_id
            });

            // After the color record is inserted, insert multiple images into 'imgcolor'
            const imgcolorPromises = req.files.map(file => {
                return imgcolor.create({
                    color_image: file.filename,
                    color_id: color.color_id, // Reference to the inserted color ID
                    prod_id
                });
            });

            // Wait for all imgcolor inserts to complete
            await Promise.all(imgcolorPromises);

            res.send({ error: false, data: color });
        } catch (err) {
            res.send({ error: true, message: err.message });
        }
    },

    // Update an existing color and its images
    updateColorImage: async (req, res) => {
        const { color_id } = req.params;
        const { color_name, prod_id } = req.body;

        try {
            let img_url = null;

            if (req.files.length > 0) {
                img_url = req.files[0].filename; // Update with the new image if provided
            }

            // Update color table
            const updatedColor = await Color.update(
                {
                    color_name,
                    color_image: img_url || sequelize.literal('color_image'),
                    prod_id
                },
                { where: { color_id:id } }
            );

            if (req.files.length > 0) {
                // If new images are uploaded, update imgcolor table
                await imgcolor.destroy({ where: { color_id:id} }); // Delete existing associated images

                const imgcolorPromises = req.files.map(file => {
                    return imgcolor.create({
                        color_image: file.filename,
                        color_id,
                        prod_id
                    });
                });

                // Wait for all new imgcolor inserts to complete
                await Promise.all(imgcolorPromises);
            }

            res.send({ error: false, data: updatedColor });
        } catch (err) {
            res.send({ error: true, message: err.message });
        }
    },

    // Delete a color and its associated images
    deleteColorImage: async (req, res) => {
        const { color_id } = req.params;

        try {
            // Delete from imgcolor first (since it references color_id)
            await imgcolor.destroy({ where: { color_id:id } });

            // Delete from Color table
            await Color.destroy({ where: { color_id:id } });

            res.send({ error: false, message: 'Color and associated images deleted successfully' });
        } catch (err) {
            res.send({ error: true, message: err.message });
        }
    },

    // Get all colors with their associated images
    getColorImages: async (req, res) => {
        try {
            const colors = await Color.findAll({
                include: [
                    {
                        model: imgcolor,                        
                        required: false
                    }
                ]
            });

            res.send({ error: false, data: colors });
        } catch (err) {
            res.send({ error: true, message: err.message });
        }
    },

    // Get a single color and its associated images by color_id
    getColorImageById: async (req, res) => {
        const { id } = req.params;

        try {
            const color = await Color.findOne({
                where: { color_id :id},
                include: [
                    {
                        model: imgcolor,
                        required: false
                    }
                ]
            });

            if (color) {
                res.send({ error: false, data: color });
            } else {
                res.send({ error: true, message: 'Color not found' });
            }
        } catch (err) {
            res.send({ error: true, message: err.message });
        }
    }
};

    



