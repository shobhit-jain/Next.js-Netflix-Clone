import en from '@/locales/page-sections/login-page/@Section-Main/en'
import hi from '@/locales/page-sections/login-page/@Section-Main/hi'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { fire } from '@/firebase/firebase'

export const SignIn_Form: React.FC = () => {
  const googleProvider = new fire.auth.GoogleAuthProvider()
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  const signInWithGoogle = () => {
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div className="bg-black md:max-w-[450px] md:p-16 p-[4%] m-auto rounded bg-opacity-70 md:mt-[20px] md:mb-[120px] mb-[90px] font-serif">
      <div className="text-[30px] text-white font-600">{t.signIn}</div>

      <form className="flex flex-col mt-[25px] children:rounded children:p-3 children:outline-none">
        <input
          type="text"
          placeholder={t.emailPlaceholder}
          className="mb-5 bg-[#333] text-white"
        />

        <input
          type="password"
          placeholder={t.passwordPlaceholder}
          autoComplete="true"
          className="mb-10 bg-[#333] text-white"
        />

        <input
          type="submit"
          value={t.submitButton}
          className="cursor-pointer bg-red text-white font-600"
        />
      </form>

      <div className="mt-1 flex justify-between text-[#b3b3b3] text-[13px]">
        <div className="flex items-center">
          <input type="checkbox" />
          <span className="ml-1">{t.rememberMe}</span>
        </div>

        <Link href="#">
          <a className="hover:underline">{t.needHelp}</a>
        </Link>
      </div>

      <div
        onClick={() => signInWithGoogle()}
        className="mt-[60px] inline-flex justify-center items-center cursor-pointer"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
          width="20"
          height="20"
        />
        <span className="text-[#737373] text-[13px] ml-2">{t.googleLogin}</span>
      </div>

      <div className="text-[#737373] mt-5">
        {t.newToNetflix}{' '}
        <Link href="/">
          <a className="text-white hover:underline">{t.signUpNow}</a>
        </Link>{' '}
      </div>

      <p className="text-[#8c8c8c] mt-2 mb-10 text-[13px]">
        {t.protectedByReCAPTCHA}{' '}
        <a href="#" className="text-blue hover:underline">
          {t.learnMore}
        </a>
      </p>
    </div>
  )
}
