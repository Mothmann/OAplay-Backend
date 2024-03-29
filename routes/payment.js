const express = require("express");
const router = express.Router();
const paymentController = require("../Controllers/payment");
const cors = require("cors");

router.post("/",cors(), paymentController.pay);

module.exports = router;
