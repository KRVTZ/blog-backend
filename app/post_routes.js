const express = require("express"),
  router = express.Router();

/*POSTS*/
router.get("/new-post", async (req, res) => {
  res.render("./admin/form_upload", { title: "New Post" });
});
// edit
router.get("/newpost-edit", async (req, res) => {
  res.render("./admin/form_upload", { title: "Edit Post" });
});
// del post

//view
router.get("/view-posts", async (req, res) => {
  res.render("./admin/view-posts", { title: "View Posts" });
});
//comments
router.get("/view-comments", async (req, res) => {
  res.render("./admin/view-comments", { title: "View Comments" });
});
//replies
router.get("/view-replies", async (req, res) => {
  res.render("./admin/view-replies", { title: "View Replies" });
});

module.exports = router;
