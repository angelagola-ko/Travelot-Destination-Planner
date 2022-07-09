const router = require("express").Router();

router.get("/", (req,res) => {
    res.render("homepage");
});

router.get("/dashboard", (req,res) => {
    res.render("dashboard");
});

router.get("/trips" ,(req,res) => {
    res.render("trips");
})

const { Wishlist, User, Trips } = require('../models');


module.exports = router;