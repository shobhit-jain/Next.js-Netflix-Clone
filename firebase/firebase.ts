import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
try {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
} catch (err) {
  if (!/already exists/.test(err.message))
    console.error('Firebase initialization error', err.stack)
}
export const fire = firebase
