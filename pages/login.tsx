import React from 'react'
import useRouter from 'next/router'
import { NextPage } from 'next'
import { Footer } from '@/components/common/footer'

export const Login_Page: NextPage = () => {
  const { router } = useRouter

  return (
    <>
      <div className="h-screen bg-[#228B22] bg-opacity-70 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-500">Sign in Page</h1>

        <div
          onClick={() => router.back()}
          className="rounded py-1 px-3 text-white border mt-5 hover:bg-[#008000] cursor-pointer"
        >
          Go Back
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login_Page
