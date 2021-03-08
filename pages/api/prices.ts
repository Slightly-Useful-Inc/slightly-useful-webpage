import type { NextApiRequest, NextApiResponse } from 'next'
import * as data from './prices.json'

type Data = {
    meat_sticks: string,
    pencils: string,
    no_no_snow: string,
    sporks: string,
    gaming_chair_desk: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ meat_sticks: data.meat_sticks, pencils: data.pencils, no_no_snow: data.no_no_snow, sporks: data.sporks, gaming_chair_desk: data.gaming_chair_desk})
}