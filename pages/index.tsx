import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/common/footer'
import { Head } from '@/components/common/head'

export const Landing_Page: NextPage = () => {
  return (
    <>
      <Head title="Netflix Clone Web – Watch TV Shows Online, Watch Movies Online" />

      <div className="bg-blue h-screen bg-opacity-70 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white mb-7 font-serif">
          Welcome To Landing Page
        </h1>

        <div>
          <Link href="/login">
            <a className="rounded py-2 px-4 bg-blue text-white hover:border">
              Sign in
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Landing_Page
