import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SignIn_Form: React.FC = () => {
  return (
    <div className="bg-black mb-10 md:max-w-[450px] md:p-16 p-[4%] m-auto rounded bg-opacity-70 mb-[90px]">
      <div className="text-[30px] text-white">Sign In</div>

      <form className="flex flex-col mt-[25px] children:rounded children:p-3 children:outline-none">
        <input
          type="text"
          placeholder="Email or phone number"
          className="mb-5"
        />

        <input type="password" placeholder="Password" className="mb-10" />

        <input
          type="submit"
          value="Sign In"
          className="cursor-pointer bg-red text-white"
        />
      </form>

      <div className="mt-1 flex justify-between text-[#b3b3b3] text-[13px]">
        <div className="flex items-center">
          <input type="checkbox" />
          <span className="ml-1">Remember me</span>
        </div>

        <Link href="#">
          <a className="hover:underline">Need help?</a>
        </Link>
      </div>

      <div className="mt-[60px] flex items-center cursor-pointer">
        <Image
          src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
          width="20"
          height="20"
        />
        <span className="text-[#737373] text-[13px] ml-2">
          Login with facebook
        </span>
      </div>

      <div className="text-[#737373] mt-5">
        New to Netflix?{' '}
        <Link href="#">
          <a className="text-white hover:underline">Sign up now.</a>
        </Link>{' '}
      </div>

      <p className="text-[#8c8c8c] mt-2 text-[13px]">
        This page is protected by Google reCAPTCHA to ensure you&apos;re not a
        bot.{' '}
        <a href="#" className="text-blue hover:underline">
          Learn more.
        </a>
      </p>
    </div>
  )
}