import { NextPage } from 'next'
import React from 'react'

export const Page_Not_Found: NextPage = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-red bg-opacity-40 text-2xl text-center">
      Page Not Found
    </div>
  )
}

export default Page_Not_Found
