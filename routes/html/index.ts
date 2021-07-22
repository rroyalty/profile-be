import * as express from 'express'
import {Router, Request, Response }from 'express'
const router: Router = express.Router();
import path from 'path';

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

module.exports = router;
