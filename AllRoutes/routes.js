const express = require("express");
const { SignUp, SignIn } = require("../Controllers/controller");
const { createTicket,getTicket } = require("../Controllers/ticketController");
const { createBookmark, getBookmark } = require("../Controllers/bookmarkController");


const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/create", createTicket);
router.get("/getticket", getTicket);
router.post("/createbookmark", createBookmark);
router.get("/getbookmark", getBookmark);

module.exports = router;
