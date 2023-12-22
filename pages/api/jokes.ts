import { prisma } from '@/prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {
    const data = await prisma.joke.findMany({
      select: {
        id: true,
        question: true,
        answer: true,
        isDark: true,
        language: {
          select: {
            name: true
          }
        }
      }
    });
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }


  res.status(200).json({ name: 'John Doe' })
}
