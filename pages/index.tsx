import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/common/footer'
import Nav from '../components/common/Nav'
import Image from 'next/image'

export const Landing_Page: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="h-screen p-4">
          <Image
            alt="Hero"
            src="/netflix_background.jpeg"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Nav />
          <a
            href="/login"
            className="authLinks redButton"
            data-uia="header-login-link"
          >
            Sign In
          </a>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Landing_Page
