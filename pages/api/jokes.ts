// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/pages/api/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {
    const data = await prisma.joke.findMany();
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }


  res.status(200).json({ name: 'John Doe' })
}
