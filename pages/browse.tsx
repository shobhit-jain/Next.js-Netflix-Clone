import { GetServerSideProps } from 'next'
import { fire } from '@/firebase/firebase'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export const Browse_Movies: NextPage = () => {
  const [user, loading, error] = useAuthState(fire.auth())
  const router = useRouter()

  const logout = () => fire.auth().signOut()

  if (loading) {
    return <></>
  }

  if (user)
    return (
      <div>
        <h1 className="bg-black text-white text-center py-3 font-600">
          Browse Movies
        </h1>

        <button onClick={() => logout()}>Sign Out</button>
      </div>
    )

  setTimeout(() => {
    router.push('/login')
  }, 0)
  return <></>
}

export default Browse_Movies

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.cookies)
  return {
    props: {},
  }
}
