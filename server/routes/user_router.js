const express = require('express');

const {RegisterUser,GetAllUser} = require("../controllers/Smecontroller");

const router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/:id").put(UpdateUser)
router.route("/").get(GetAllUser)




module.exports = router;