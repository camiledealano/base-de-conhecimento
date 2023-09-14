const express = require('express');

var router = express.Router();

router.get("/", (_, res) => {
   res.redirect("/home");
});