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

// Newest Post
router.get('/newestText', async (req: Request, res: Response) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).getNew()
        res.status(200).json(subreddit[0].selftext)
    } catch (err) {
        console.log(err)
    }
});

// Newest Post Title
router.get('/newestTitle', async (req: Request, res: Response) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).getNew()
        res.status(200).json(subreddit[0].title)
    } catch (err) {
        console.log(err)
    }
});



module.exports = router;