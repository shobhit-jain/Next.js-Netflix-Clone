import { Footer } from '@/components/common/footer'
import { Head } from '@/components/common/head'
import { SignIn_Form } from '@/components/page-sections/login-page/signin-form/signin-form'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Login_Page: NextPage = () => {
  return (
    <>
      <Head
        title="Netflix"
        description="Login Page Description"
        canonical="https://netflix-web.vercel.app/login"
        openGraph_title="Netflix"
        openGraph_description="Watch Netflix Movies"
        openGraph_image_url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
      />

      <div className="md:bg-hero-image bg-no-repeat bg-cover bg-center bg-black">
        <div className="pl-[4%] xs:pl-[3%] pt-[20px] xs:!w-[250px] !w-[80px]">
          <Link href="/">
            <a>
              <Image
                src={require('@/assets/icons/netflix-logo.svg')}
                width="166"
                height="50"
              />
            </a>
          </Link>
        </div>

        <SignIn_Form />

        <div className="opacity-70 border-t border-[#aaa] md:border-none">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Login_Page
