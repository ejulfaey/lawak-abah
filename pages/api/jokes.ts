import { prisma } from '@/prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {
    const result = await prisma.joke.findMany({
      select: {
        id: true,
        question: true,
        answer: true,
        isDark: true,
        jokeCounter: true,
        language: {
          select: {
            name: true
          }
        }
      }
    });
    res.json(result);
  } if (req.method === 'POST') {
    const data = req.body;
    const result = await prisma.joke.create({
      data: {
        ...data,
        userId: 1,
        languageId: 1
      }
    });
    res.json(result);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
