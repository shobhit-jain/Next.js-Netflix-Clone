import * as firebaseAdmin from 'firebase-admin'

const privateKey = process.env['private_key']
const clientEmail = process.env['NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL']
const projectId = process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID']

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  )
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: 'nextjs-netflix',
      privateKey: process.env.private_key?.replace(/\\n/g, '\n'),
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_URL,
  })
}

export { firebaseAdmin }
