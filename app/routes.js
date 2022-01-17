const express = require("express"),
  router = express.Router();

router.get("/", async (req, res) => {
  const articles = [
    {
      title: "9 AM in Dallas",
      createdAt: new Date(),
      description:
        "Money gets all of my love and affection, Cars all black like the cover of Essence",
      author: "Aubrey Graham",
    },
    {
      title: "3 AM in New Orleans",
      createdAt: new Date(),
      description:
        "Y'all puttin' pen to the sheets,Tired of sittin' quiet and helpin' my enemies eat",
      author: "6 God",
    },
    {
      title: "8 AM in Harlem",
      createdAt: new Date(),
      description:
        "I'm tired of hearin' 'bout who you checkin' for now, Just give it time, we'll see who's still around a decade from now",
      author: "Drake",
    },
  ];
  res.render("./index", { title: "Blog Home", articles: articles });
});

router.get("/new", async (req, res) => {
  res.render("./new", { title: "New" });
});

router.get("/error", async (req, res) => {
  res.render("./page-404", { title: "Error" });
});

router.get("/contact", async (req, res) => {
  res.render("./contact", { title: "Contact" });
});

router.get("/about", async (req, res) => {
  res.render("./about", { title: "About" });
});

router.get("/elements", async (req, res) => {
  res.render("./elements", { title: "Elements" });
});

router.get("/blog-list", async (req, res) => {
  res.render("./blog-list", { title: "Blog List" });
});

router.get("/blog-post", async (req, res) => {
  res.render("./blog-post", { title: "Blog Post" });
});

router.get("/login", async (req, res) => {
  res.render("./admin/login", { title: "Login" });
});
// router.get("/", (req, res) => res.send("<h1> New Page </h1>"));

router.get("/about", async (req, res) => res.send("<h1> About Page </h1>"));

router.get("/user/:username/:state", (req, res) => {
  console.log(req.params);
  const user = req.params;
  const query = req.query;
  res.send(`
  <h1> User: ${user.username} </h1>
  <h1> State: ${user.state}</h1>
  <h1> Low: ${query.low} </h1>
  <h1> High: ${query.high}</h1>
  `);
});

module.exports = router;
