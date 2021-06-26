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

// try {
//   firebaseClient.initializeApp(CLIENT_CONFIG)
//   if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
//     console.log('firebase client initialized')
//     firebaseClient
//       .auth()
//       .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION)
//     ;(window as any).firebase = firebaseClient
//   }
// } catch (err) {
//   if (!/already exists/.test(err.message))
//     console.error('Firebase initialization error', err.stack)
// }

// if (!firebaseClient.apps.length) {
//   firebaseClient.initializeApp(CLIENT_CONFIG)
//   console.log('initialized !')
//   try {
//     firebaseClient
//       .auth()
//       .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION)
//     ;(window as any).firebase = firebaseClient
//   } catch (err) {
//     if (!/already exists/.test(err.message))
//       console.error('Firebase initialization error', err.stack)
//   }
// }

if (!firebaseClient.apps.length) {
  console.log('initialization success !!!')
  firebaseClient.initializeApp(CLIENT_CONFIG)
}

// if (!firebaseClient.apps.length) {
//   firebaseClient.initializeApp(CLIENT_CONFIG)
//   // firebaseClient
//   //   .auth()
//   //   .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
//   // (window as any).firebase = firebaseClient;
// }

export { firebaseClient }
