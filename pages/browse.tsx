import { InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseAdmin } from '@/firebase/firebaseAdmin'
import { firebaseClient } from '@/firebase/firebaseClient'
import nookies from 'nookies'
import { GetServerSidePropsContext } from 'next'

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<any> => {
  try {
    const cookies = nookies.get(ctx)
    console.log(JSON.stringify(cookies, null, 2))
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    }
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
      props: {} as never,
    }
  }
}

export const Browse_Movies: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [user, loading, error] = useAuthState(firebaseClient.auth())
  const router = useRouter()

  return (
    <div>
      <h1 className="bg-black text-white text-center py-3 font-600">
        Browse Movies
      </h1>

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
