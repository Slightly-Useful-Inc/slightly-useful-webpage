import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    meat_sticks: string,
    pencils: string,
    no_no_snow: string,
    sporks: string,
    gaming_chair_desk: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ meat_sticks: "$1.25", pencils: "$1.00", no_no_snow: "$100", sporks: "$.45", gaming_chair_desk:"COMING SOON!"})
}