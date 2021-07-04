import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignIn_Form } from '../components/signin-form/signin-form'

export const Login_Page_Main_Section: NextPage = () => {
  return (
    <>
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
    </>
  )
}
