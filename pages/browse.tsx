import { InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { verifyIdToken } from '@/firebase/firebase-admin'
import { firebaseClient } from '@/firebase/firebaseClient'
import nookies from 'nookies'
import { GetServerSidePropsContext } from 'next'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx)

  if (cookies.token === '') {
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

  return {
    props: {} as never,
  }
}

export const Browse_Movies: any = () => {
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
