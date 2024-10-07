const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../model/index"); // Assuming you have a User model defined in models directory
const User = db.user;

module.exports = {
  loginUser: async (req, res) => {
    try {
      let userName = req.body.user_name;
      let password = req.body.user_pass;

      // Fetch the user by email using Sequelize
      const user = await User.findOne({
        where: { user_name: userName }, // Match email in the database
      });

      if (!user) {
        return res.status(404).send({ err: true, message: "User not found" });
      }
      console.log('User pass:',user.user_pass);
      
      // Compare password with the hashed password in the database
      //   const isSame = bcrypt.compareSync(password, user.user_pass);
      const isSame = password == user.user_pass ? true : false;
      

      if (isSame) {
        // Create a token
        const token = jwt.sign(
          { id: user.user_id, name: user.user_name },
          process.env.SECRET,
          { expiresIn: "1h" }
        );

        res.send({ err: false, message: "User logged in", token: token });
      } else {
        res.send({ err: true, message: "Login failed" });
      }
    } catch (err) {
      console.log("Error in Fn-loginUser:", err.message);
      res.status(500).send({ err: true, message: err.message });
    }
  },
};
