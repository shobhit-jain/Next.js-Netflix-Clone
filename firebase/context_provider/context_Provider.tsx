import React, { createContext } from 'react'
import nookies from 'nookies'
import firebase from 'firebase/app'
import { fire } from '../firebase'

const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
})

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<firebase.User | null>(null)

  // listen for token changes
  // call setUser and write new token as a cookie
  React.useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', { path: '/' })
      } else {
        const token = await user.getIdToken()
        setUser(user)
        nookies.set(undefined, 'token', token, { path: '/' })
      }
    })
  }, [])

  // force refresh the token every 10 minutes
  React.useEffect(() => {
    const handle = setInterval(async () => {
      const user = fire.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    // clean up setInterval
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
