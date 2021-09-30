// import { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { firebaseAdmin } from '@/firebase/firebaseAdmin'
import { firebaseClient } from '@/firebase/firebaseClient'
import nookies from 'nookies'
// import { GetServerSidePropsContext } from 'next'
import { useAuth } from '@/firebase/Auth/auth'
import { GetServerSidePropsContext } from 'next'

export const Browse_Movies: any = () => {
  // const [user, loading, error] = useAuthState(firebaseClient.auth())
  const { user } = useAuth()
  const router = useRouter()

  return (
    <div>
      <h1 className="bg-black text-white text-center py-3 font-600">
        Browse Movies
      </h1>

      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <button
        onClick={async () => {
          await firebaseClient
            .auth()
            .signOut()
            .then(() => {
              router.push('/')
            })
        }}
      >
        Sign Out
      </button>
    </div>
  )
}

export default Browse_Movies

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<any> => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    return {
      props: {
        message: `Your email is ${email} and your UID is ${uid}.`,
      },
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {} as never,
    }
  }
}
