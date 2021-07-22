import * as express from 'express'
import {Router, Request, Response }from 'express'
import apiRoutes from './api/index'
import htmlRoutes from'./html/index'
const router: Router = express.Router();

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req: Request, res: Response) => {
  res.send("<h1>Wrong Route!</h1>")
});

export default router;