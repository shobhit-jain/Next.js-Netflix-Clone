import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA2TxGoinef9xuAh_bKzBKgD_8it28rbJg',
  authDomain: 'nextjs-netflix.firebaseapp.com',
  databaseURL: 'https://nextjs-netflix-default-rtdb.firebaseio.com',
  projectId: 'nextjs-netflix',
  storageBucket: 'nextjs-netflix.appspot.com',
  messagingSenderId: 616382430524,
  appId: '1:616382430524:web:449604c3182f38b8cdb239',
}
try {
  firebase.initializeApp(firebaseConfig)
  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
} catch (err) {
  if (!/already exists/.test(err.message))
    console.error('Firebase initialization error', err.stack)
}
export const fire = firebase
