import type { NextApiRequest, NextApiResponse } from 'next'
import * as data from '../prices.json'
const fs = require("fs")


export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST'){
        const { itemId } = req.query;
        res.send(itemId[1])
        
    }
    
    else {
        res.send("You can't use that method!")
    }
    
}