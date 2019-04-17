const router = require("express").Router();
const gitRepo = require("./gitRepo");

// gitRepo route
router.use("/repos", gitRepo);

module.exports = router;
