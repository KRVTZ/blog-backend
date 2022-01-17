const express = require("express"),
  router = express.Router();

/*SETTINGS*/
router.get("/mods", async (req, res) => {
  res.render("./admin/mods", { title: "Moderators" });
});
router.get("/admin-about", async (req, res) => {
  res.render("./admin/about", { title: "More About" });
});

module.exports = router;
