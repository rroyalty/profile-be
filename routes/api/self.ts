import * as express from 'express'
import {Router, Request, Response }from 'express'
const router: Router = express.Router();
require('dotenv').config();
import snoowrap, { SnoowrapOptions } from 'snoowrap'

const vars: SnoowrapOptions = {
    userAgent: process.env.USER_AGENT!,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
};

// TEST
router.get('/', async (req: Request, res: Response) => {
    try {
        const snoo = await new snoowrap(vars);
        const subreddit = snoo.getSubreddit('realEstate');
        const topPosts = await subreddit.getTop({time: 'week', limit: 3});
      
        let data = [];
      
        topPosts.forEach((post) => {
          data.push({
            link: post.url,
            text: post.title,
            score: post.score
          })
        });

        res.status(200).json(topPosts)
    } catch (err) {

    }
});



module.exports = router;