import * as express from 'express'
import {Router, Request, Response }from 'express'
const router: Router = express.Router();
const selfRoutes = require('./self')

router.use('/self', selfRoutes);

module.exports = router;
