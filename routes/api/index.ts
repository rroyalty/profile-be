import * as express from 'express'
import { Router } from 'express'
const router: Router = express.Router();
import selfRoutes from './self'

router.use('/self', selfRoutes);

export default router;
