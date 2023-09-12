import express from 'express'

var router = express.Router();

router.get("/", (_, res) => {
   res.redirect("/home");
});


export default router