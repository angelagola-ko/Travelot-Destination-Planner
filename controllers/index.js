const router = require("express").Router();
const homeRoute = require("./home-routes.js");
const wishlistRoutes = require('./wishlistroutes.js');
const tripstRoutes = require('./tripsroutes.js');
const exploreRoutes = require("./exploreroutes.js");
const userRoutes = require('./user-routes');



router.use("/", homeRoute);
router.use("/wishlist", wishlistRoutes);
router.use("/trips", tripstRoutes);
router.use('/user', userRoutes);
router.use("/explore", exploreRoutes);

module.exports = router;