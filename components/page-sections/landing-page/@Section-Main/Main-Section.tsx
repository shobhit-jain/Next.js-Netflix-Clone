import en from '@/locales/page-sections/landing-page/@Section-Main/en'
import hi from '@/locales/page-sections/landing-page/@Section-Main/hi'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
// import GoogleLogin from 'react-google-login'
import { useLocalStorage } from 'react-use'
import { Enter_Email_And_Get_Started } from '../Common/Enter-email-and-get-started'
import { useGoogleLogin } from 'react-google-login'

export const Main_Section: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  const responseGoogle = (response: any) => {
    console.log(response)
  }

  const clientId =
    '616382430524-7fvjkmdigp5oqn645gfhf77bsnfq05ud.apps.googleusercontent.com'

  const { signIn } = useGoogleLogin({
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    clientId,
    isSignedIn: true,
  })

  return (
    <>
      <section className="bg-hero-image bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between pt-[27px] md:px-[56px] px-[22px]">
          <div className="md:!w-[250px] w-[25%]">
            <Image
              src={require('@/assets/icons/netflix-logo.svg')}
              width="166"
              height="50"
            />
          </div>

          {/* <button
            className="text-white bg-blue px-5 rounded"
            onClick={() => signIn()}
          >
            Sign In
          </button> */}

          {/* <GoogleLogin
            clientId="616382430524-7fvjkmdigp5oqn645gfhf77bsnfq05ud.apps.googleusercontent.com"
            disabled={false}
            buttonText="Login With Google"
            className=""
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          /> */}

          <div>
            <Language_Switcher />

            <Link href="/login">
              <a className="text-white px-3  md:px-5 py-[8px] rounded-sm text-[15px] bg-red font-serif">
                {t.signIn}
              </a>
            </Link>
          </div>
        </div>

        <div className="text-white text-center py-[12.4%] px-[20px] font-serif">
          <h1
            className="lg:text-[62px] md:text-[50px] text-[28px] font-700 lg:max-w-[700px] md:max-w-[600px] max-w-[350px] m-auto leading-tight mb-2"
            data-cy="heading-main"
          >
            {t.h1}
          </h1>

          <h2 className="md:text-[26px] text-[18px] ">{t.h2}</h2>

          <Enter_Email_And_Get_Started />
        </div>
      </section>
    </>
  )
}

const Language_Switcher = () => {
  const [language, setLanguage] = useLocalStorage('language', 'en')

  const router = useRouter()
  let { locale } = router

  React.useEffect(() => {
    locale = language // => updating locale (language - value) from local-storage
    router.push('/', '/', { locale })
  }, [])

  const changeLanguage = (e: any) => {
    const locale = e.target.value

    setLanguage(locale) // => setting (language - value) in local-storage
    router.push('/', '/', { locale })
  }

  return (
    <>
      <select
        onChange={changeLanguage}
        value={locale}
        className="md:mr-[30px] sm:mr-[20px] mr-[15px] bg-black text-white px-2 py-[8px] border-[#aaa] focus:border-white border rounded-sm text-sm"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </>
  )
}
