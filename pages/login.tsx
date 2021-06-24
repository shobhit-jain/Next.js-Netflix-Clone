import { GetServerSideProps } from 'next'
import { Footer } from '@/components/common/footer'
import { Head } from '@/components/common/head'
import { Login_Page_Main_Section } from '@/components/page-sections/login-page/@Section-Main/Main-Section'
import { fire } from '@/firebase/firebase'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import nookies from 'nookies'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { verifyIdToken } from '@/firebase/firebase-admin'

export const Login_Page: NextPage = () => {
  const [user, loading, error] = useAuthState(fire.auth())
  const router = useRouter()

  if (user) {
    console.log(user.email)
  } else {
    console.log('no user')
  }

  return (
    <>
      <Head
        title="Netflix"
        description="Login Page Description"
        canonical="https://netflix-web.vercel.app/login"
      />

      <div className="md:bg-hero-image bg-no-repeat bg-cover bg-center bg-black">
        <Login_Page_Main_Section />

        <div className="opacity-70 border-t border-[#aaa] md:border-none">
          <Footer />
        </div>
      </div>
    </>
  )
}

// export const getServerSideProps = async (
//   ctx: GetServerSidePropsContext
// ): Promise<any> => {
//   try {
//     const cookies = nookies.get(ctx)
//     const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)

//     // the user is authenticated!
//     const { uid, email } = token

//     console.log(cookies)

//     // FETCH STUFF HERE!! 🚀

//     return {
//       props: { message: `Your email is ${email} and your UID is ${uid}.` },
//     }
//   } catch (err) {
//     return { props: {} as never }
//   }
// }

export default Login_Page
