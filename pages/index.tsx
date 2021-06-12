import { Footer } from '@/components/common/footer'
import { Head } from '@/components/common/head'
import { Create_Profiles_For_Children } from '@/components/page-sections/landing-page/@Section-Profiles-for-children/Create-profiles-for-children'
import { Download_Your_Shows } from '@/components/page-sections/landing-page/@Section-Download-your-shows/Download-your-shows'
import { Enjoy_On_Your_Tv } from '@/components/page-sections/landing-page/@Section-Enjoy-on-your-tv/Enjoy-on-your-tv'
import { Frequently_Asked_Questions } from '@/components/page-sections/landing-page/@Section-Frequently-asked-questions/Frequently-asked-questions'
import { Main_Section } from '@/components/page-sections/landing-page/@Section-Main/Main-Section'
import { Watch_Everywhere } from '@/components/page-sections/landing-page/@Section-Watch-everywhere/Watch-everywhere'
import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import GoogleLogin from 'react-google-login'

export const Landing_Page: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <>
      <Head
        title={
          locale === 'en'
            ? 'Netflix India – Watch TV Shows Online, Watch Movies Online'
            : 'Netflix भारत - टीवी शो और फ़िल्में ऑनलाइन देखें'
        }
        description="Landing Page Description"
        canonical="https://netflix-web.vercel.app"
      />

      <GoogleLogin
        clientId="616382430524-7fvjkmdigp5oqn645gfhf77bsnfq05ud.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <Main_Section />
      <Enjoy_On_Your_Tv />
      <Download_Your_Shows />
      <Watch_Everywhere />
      <Create_Profiles_For_Children />
      <Frequently_Asked_Questions />
      <Footer />
    </>
  )
}

export default Landing_Page
