import * as express from 'express'
import { Router, Request, Response } from 'express'
const router: Router = express.Router();
require('dotenv').config();
import snoowrap, { SnoowrapOptions } from 'snoowrap'

const vars: SnoowrapOptions = {
    userAgent: "portfolio",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
};

// TEST
router.get('/', async (req: Request, res: Response) => {

    try {
        const snoo = await new snoowrap(vars);
        const user = await snoo.getUser('rroyaltywebdev').getOverview();
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).all_original_content
        res.status(200).json(subreddit)
    } catch (err) {
        console.log(err)
    }
});



module.exports = router;