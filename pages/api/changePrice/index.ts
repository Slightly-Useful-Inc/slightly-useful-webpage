import type { NextApiRequest, NextApiResponse } from 'next'


export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST'){
        res.send("No Item Id Received")
    }
    
    else {
        res.send("You can't use that method!")
    }
    
}