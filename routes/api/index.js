const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./users");


// Auth routes
router.use("/auth", authRoutes);
// User routes
router.use("/users", userRoutes);

module.exports = router;
