import * as firebaseAdmin from 'firebase-admin'

if (!firebaseAdmin.apps.length) {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        projectId: 'next-test-env',
        privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(
          /\\n/g,
          '\n'
        ),
        clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      }),
      databaseURL: 'https://nextjs-netflix-default-rtdb.firebaseio.com',
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack)
  }
}

export { firebaseAdmin }
