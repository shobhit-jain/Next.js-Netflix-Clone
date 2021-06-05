import { fire } from '@/firebase/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const { slug } = req.body
    const demoData = await fire
      .firestore()
      .collection('collection_name_demo')
      .get()
    // const demosData = demoData.docs.map((data) => data.data())

    const { id } = await fire
      .firestore()
      .collection('collection_name_demo')
      .add({
        ...req.body,
        created: new Date().toISOString(),
      })
    res.status(200).json({ id })

    // if (demosData.some((data) => data.slug === slug)) {
    //   res.status(400).end()
    // } else {
    //   const { id } = await fire
    //     .firestore()
    //     .collection('collection_name_demo')
    //     .add({
    //       ...req.body,
    //       created: new Date().toISOString(),
    //     })
    //   res.status(200).json({ id })
    // }
  } catch (e) {
    res.status(400).end()
  }
}
