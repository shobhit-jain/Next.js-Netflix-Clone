import { fire } from '@/firebase/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { id }: any = req.query

  try {
    if (req.method === 'PUT') {
      await fire
        .firestore()
        .collection('collection_name_demo')
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString(),
        })
    } else if (req.method === 'GET') {
      const doc = await fire
        .firestore()
        .collection('collection_name_demo')
        .doc(id)
        .get()
      if (!doc.exists) {
        res.status(404).end()
      } else {
        res.status(200).json(doc.data())
      }
    } else if (req.method === 'DELETE') {
      await fire.firestore().collection('collection_name_demo').doc(id).delete()
    }
    res.status(200).end()
  } catch (e) {
    res.status(400).end()
  }
}
