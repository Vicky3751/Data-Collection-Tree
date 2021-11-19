const express = require("express");
const router = express.Router();

router.use("/insert", require("../controllers/insert"));
router.use("/", require("../controllers/queries"));
module.exports = router;
