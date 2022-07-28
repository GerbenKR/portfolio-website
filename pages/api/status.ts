// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    succes: Boolean;
    offlineCount: Number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const response = await fetch(process.env.STATUS_API_URL as string);
    const { result: data } = await response.json();

    let offlineCount = 0;

    for await (const item of data) {
        if (item.status == 9) {
            offlineCount++;
        }
    }

    res.json({
        succes: true,
        offlineCount,
    });
}
