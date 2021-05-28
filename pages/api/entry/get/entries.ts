import { fire } from '@/firebase/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const entries = await fire
      .firestore()
      .collection('entries')
      .orderBy('created')
      .get()
    const entriesData = entries.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }))
    res.status(200).json({ entriesData })
  } catch (e) {
    res.status(400).end()
  }
}
