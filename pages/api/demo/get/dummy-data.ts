import { fire } from '@/firebase/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const entries = await fire
      .firestore()
      .collection('collection_name_demo')
      .orderBy('created')
      .get()
    const DemoData = entries.docs.map((data) => ({
      id: data.id,
      ...data.data(),
    }))
    res.status(200).json({ DemoData })
  } catch (e) {
    res.status(400).end()
  }
}
