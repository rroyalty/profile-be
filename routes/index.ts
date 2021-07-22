import * as express from 'express'
import {Router, Request, Response }from 'express'
const apiRoutes = require('./api/index')
const htmlRoutes = require('./html/index')
const router: Router = express.Router();

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req: Request, res: Response) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;