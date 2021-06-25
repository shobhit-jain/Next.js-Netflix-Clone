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
import { request } from 'graphql-request'
import useSWR from 'swr'
import { useAuthState } from 'react-firebase-hooks/auth'
import { fire } from '@/firebase/firebase'
// import nookies, { parseCookies } from 'nookies'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { verifyIdToken } from '@/firebase/firebase-admin'
import { parseCookies } from '@/lib/parseCookies'
import axios from 'axios'

// const API_ENDPOINT = '/api/graphql'

// const helloQuery = `{
//     hello(
//       name: "sam"
//     )
// }`

export const Landing_Page: NextPage = ({ initialToken }: any) => {
  const router = useRouter()
  const { locale } = router
  const [user, loading, error] = useAuthState(fire.auth())

  // const { data: hello, error: e } = useSWR(helloQuery, (query) =>
  //   request(API_ENDPOINT, query)
  // )

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

      <div>{initialToken}</div>

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

export async function getServerSideProps(): Promise<any> {
  const res = axios.get(`/api/demo/get/dummy-data`)
  const data = res

  if (data) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Landing_Page
