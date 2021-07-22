import * as express from 'express'
import {Router, Request, Response }from 'express'
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
router.get('/', (req: Request, res: Response) => {


    const authUrl: string = snoowrap.getAuthUrl({
        clientId: process.env.CLIENT_ID!,
        scope: [`account`, `identity`, `history`, `read`, `mysubreddits`, `modposts`, `modself`, `livemanage`, `wikiread`, ],
        redirectUri: `https://www.reddit.com`,
        permanent: true,
        state: `abc123`
    })

    window.location.href = authUrl;
    // try {
    //     const snoo = await new snoowrap(vars);
    //     const user = await snoo.getUser('rroyaltywebdev').link_karma
    //     res.status(200).json(user)
    // } catch (err) {
    //     console.log(err)
    // }
});



module.exports = router;