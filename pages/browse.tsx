import { fire } from '@/firebase/firebase'
import { verifyIdToken } from '@/firebase/firebase-admin'
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import nookies from 'nookies'

export const Browse_Movies: NextPage = () => {
  const [user, loading, error] = useAuthState(fire.auth())
  const router = useRouter()

  const logout = () => fire.auth().signOut()

  return (
    <div>
      <h1 className="bg-black text-white text-center py-3 font-600">
        Browse Movies
      </h1>

      <button onClick={() => logout()}>Sign Out</button>
    </div>
  )
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<any> => {
  try {
    const cookies = nookies.get(ctx)
    const token = await verifyIdToken(cookies.token)
    const { uid, email } = token

    return {
      props: {
        message: `Your email is ${email} and your UID is ${uid}.`,
      },
    }
  } catch (err) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return { props: {} as never }
  }
}

export default Browse_Movies
