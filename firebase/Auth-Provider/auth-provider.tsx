import React, { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'
import { firebaseClient } from '@/firebase/firebaseClient'

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
})

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebaseClient.User | null>(null)

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
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
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    // clean up setInterval
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth: any = () => {
  return useContext(AuthContext)
}
