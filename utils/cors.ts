
import {Response, Request, NextFunction} from 'express'

const cors = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
  
export default cors
  