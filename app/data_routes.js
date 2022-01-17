const express = require("express"),
  router = express.Router();

/* DATA */
router.get("/stats", async (req, res) => {
  res.render("./admin/stats", { title: "Stats" });
});
router.get("/goals", async (req, res) => {
  res.render("./admin/goals", { title: "Project Goals" });
});
router.get("/project", async (req, res) => {
  res.render("./admin/project_detail", { title: "Project" });
});

module.exports = router;
