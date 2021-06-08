import { Footer } from '@/components/common/footer'
import { Head } from '@/components/common/head'
import { Login_Page_Main_Section } from '@/components/page-sections/login-page/@Section-Main/Main-Section'
import { NextPage } from 'next'
import React from 'react'

export const Login_Page: NextPage = () => {
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
