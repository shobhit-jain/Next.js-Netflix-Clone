import firebaseClient from 'firebase/app'
import 'firebase/auth'

const CLIENT_CONFIG = {
  apiKey: 'AIzaSyA2TxGoinef9xuAh_bKzBKgD_8it28rbJg',
  authDomain: 'nextjs-netflix.firebaseapp.com',
  databaseURL: 'https://nextjs-netflix-default-rtdb.firebaseio.com',
  projectId: 'nextjs-netflix',
  storageBucket: 'nextjs-netflix.appspot.com',
  messagingSenderId: '616382430524',
  appId: '616382430524:web:449604c3182f38b8cdb239',
}

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG)
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION)
  ;(window as any).firebase = firebaseClient
}

export { firebaseClient }
