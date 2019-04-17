const router = require('express').Router();
const axios   = require('axios'  );
const repoController = require("../../controllers/gitController")

router.route("/api/repos")
.get(repoController.findAll)
    

module.exports = router;