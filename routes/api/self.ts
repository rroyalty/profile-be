import * as express from 'express'
import { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();
require('dotenv').config();
import snoowrap, { SnoowrapOptions } from 'snoowrap'

const vars: SnoowrapOptions = {
    userAgent: "portfolio",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
};

// Newest Post Text
router.get('/newestText', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).getNew()
        res.status(200).json(subreddit[0].selftext)
    } catch (err) {
        console.log(err)
    }
});

// Newest Post Title
router.get('/newestTitle', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).getNew()
        res.status(200).json(subreddit[0].title)
    } catch (err) {
        console.log(err)
    }
});

// Newest Post Date
router.get('/newestDate', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).getNew()
        res.status(200).json(subreddit[0].created)
    } catch (err) {
        console.log(err)
    }
});

// All Posts
router.get('/allPosts', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = await snoo.getSubreddit(`u_rroyaltywebdev`).getNew()
        res.status(200).json(subreddit)
    } catch (err) {
        console.log(err)
    }
});



module.exports = router;