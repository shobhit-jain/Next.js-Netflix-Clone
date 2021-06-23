import * as firebaseAdmin from 'firebase-admin'
// import serviceAccount from '../secret.json'

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      privateKey: process.env.private_key.replace(/\\n/g, '\n'),
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      // projectId: serviceAccount.project_id,
      // privateKey: serviceAccount.private_key,
      // clientEmail: serviceAccount.client_email,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_URL,
  })
}

export { firebaseAdmin }
