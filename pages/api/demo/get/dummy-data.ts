import { firebaseClient } from '@/firebase/firebaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const entries = await firebaseClient
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
