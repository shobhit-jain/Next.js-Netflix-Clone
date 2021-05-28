import { fire } from '@/firebase/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const { slug } = req.body
    const entries = await fire.firestore().collection('entries').get()
    const entriesData = entries.docs.map((entry) => entry.data())

    if (entriesData.some((entry) => entry.slug === slug)) {
      res.status(400).end()
    } else {
      const { id } = await fire
        .firestore()
        .collection('entries')
        .add({
          ...req.body,
          created: new Date().toISOString(),
        })
      res.status(200).json({ id })
    }
  } catch (e) {
    res.status(400).end()
  }
}
