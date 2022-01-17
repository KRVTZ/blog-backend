const express = require("express"),
  router = express.Router();
const dbconnection = require("../database/db");

/*ADMIN SECTION */
/* ADMIN LOGIN PAGE */
router.get("/admin/", async (req, res) => {
  res.render("./admin/admin", { title: "Admin" });
});

/* USER SECTION */
/*USER PROFILE PAGE*/
router.get("/profile", async (req, res) => {
  res.render("./admin/profile", { title: "Profile" });
});
//edit
router.get("/edit-profile", async (req, res) => {
  res.render("./admin/profile", { title: "Edit Profile" });
});
//del

// router.get("/user_inbox", async (req, res) => {
//   res.render("./admin/inbox");
// });

// router.get("/user_calendar/", async (req, res) => {
//   res.render("./admin/calendar");
// });

/* RESOURCE PAGES */
router.get("/charts", async (req, res) => {
  res.render("./admin/chartjs");
});
router.get("/chart2", async (req, res) => {
  res.render("./admin/chartjs2");
});
router.get("/echart", async (req, res) => {
  res.render("./admin/echarts");
});
router.get("/moris", async (req, res) => {
  res.render("./admin/morisjs");
});
router.get("/chart3", async (req, res) => {
  res.render("./admin/other_charts");
});
router.get("/widgets", async (req, res) => {
  res.render("./admin/widgets");
});
module.exports = router;
