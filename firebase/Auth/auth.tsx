import React, { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'
import { firebaseClient } from '@/firebase/firebaseClient'

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<firebaseClient.User | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(window as any).nookies = nookies
    }

    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      console.log(`token changed!`)
      if (!user) {
        console.log(`no token found...`)
        setUser(null)
        nookies.destroy(null, 'token')
        nookies.set(null, 'token', '', { path: '/' })
        return
      }

      console.log(`updating token...`)
      const token = await user.getIdToken()
      setUser(user)
      nookies.destroy(null, 'token')
      nookies.set(null, 'token', token, { path: '/' })
    })
  }, [])

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`)
      const user = firebaseClient.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = (): any => {
  return useContext(AuthContext)
}
