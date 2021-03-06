import type { NextApiRequest, NextApiResponse } from 'next'




export default (req: NextApiRequest, res: NextApiResponse) => {
    const { itemId} = req.query;
    res.send(itemId)
}