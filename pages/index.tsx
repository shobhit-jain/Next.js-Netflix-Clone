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
import nookies from 'nookies'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { firebaseAdmin } from '@/firebase/firebase-admin'

const API_ENDPOINT = '/api/graphql'

const helloQuery = `{
    hello(
      name: "sam"
    )
}`

export const Landing_Page: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter()
  const { locale } = router
  const [user, loading, error] = useAuthState(fire.auth())

  const { data: hello, error: e } = useSWR(helloQuery, (query) =>
    request(API_ENDPOINT, query)
  )

  // console.log(!hello ? 'loading . .' : hello.hello)

  // console.log(auth)

  // if (loading) {
  //   return null
  // }

  // if (user) {
  //   setTimeout(() => {
  //     router.push('/browse')
  //   }, 0)
  //   return <></>
  // }

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

      <div>
        <p>{props.message}</p>
      </div>
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

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<any> => {
  try {
    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)

    // the user is authenticated!
    const { uid, email } = token

    // FETCH STUFF HERE!! 🚀

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    }
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never }
  }
}
