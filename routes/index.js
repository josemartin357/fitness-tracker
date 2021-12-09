const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./htmlRoutes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
