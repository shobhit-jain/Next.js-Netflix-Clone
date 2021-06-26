import { Footer } from '@/components/common/footer'
import { Head } from '@/components/common/head'
import { Login_Page_Main_Section } from '@/components/page-sections/login-page/@Section-Main/Main-Section'
import { firebaseClient } from '@/firebase/firebaseClient'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export const Login_Page: NextPage = () => {
  const [user, loading, error] = useAuthState(firebaseClient.auth())
  const router = useRouter()

  if (user) {
    console.log(user.email)
  } else {
    console.log('no user')
  }

  return (
    <>
      <Head
        title="Netflix"
        description="Login Page Description"
        canonical="https://netflix-web.vercel.app/login"
      />

      <div className="md:bg-hero-image bg-no-repeat bg-cover bg-center bg-black">
        <Login_Page_Main_Section />

        <div className="opacity-70 border-t border-[#aaa] md:border-none">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Login_Page
