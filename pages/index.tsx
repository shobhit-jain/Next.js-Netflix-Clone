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

export const Landing_Page: NextPage = () => {
  const router = useRouter()
  const { locale } = router

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
        openGraph_title="Netflix"
        openGraph_description="Watch Netflix Movies"
        openGraph_image_url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
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
