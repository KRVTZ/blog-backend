const express = require("express"),
  router = express.Router();
const Users = require("./models/userModel");

router.get("/user-accounts", async (req, res) => {
  res.render("./admin/accounts", { title: "Users" });

  //getting user data
  Users.find({}, (err, docs) => {
    if (!err) {
      return res.json({ data: docs });
    } else {
      return res.status(400).json({ message: "Something Wrong!!!" });
    }
  });
});

//add user
router.get("/add-user", async (req, res) => {
  res.render("./admin/add_user", { title: "Add User" });
});
// edit user
router.get("/edit-user", async (req, res) => {
  res.render("./admin/accounts", { title: "Edit User" });
});
// del user
module.exports = router;
