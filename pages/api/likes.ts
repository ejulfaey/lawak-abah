import { prisma } from '@/prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === "POST") {
        const { jokeId, sessionId, status } = req.body;
        const result = await prisma.jokeCounter.upsert({
            where: {
                sessionId,
                jokeId,
            },
            update: {
                status
            },
            create: {
                sessionId,
                jokeId,
                status
            }
        });
        res.json(result);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}