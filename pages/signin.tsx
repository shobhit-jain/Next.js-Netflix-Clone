import { fire } from '@/firebase/firebase'
import { NextPage } from 'next'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export const SignIn: NextPage = () => {
  const googleProvider = new fire.auth.GoogleAuthProvider()
  const [user, loading, error] = useAuthState(fire.auth())

  if (user) {
    console.log(user.email)
    console.log(user.uid)
  }

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

  // const clientId =
  //   '616382430524-7fvjkmdigp5oqn645gfhf77bsnfq05ud.apps.googleusercontent.com'

  // const { signIn } = useGoogleLogin({
  //   onSuccess: responseGoogle,
  //   onFailure: responseGoogle,
  //   clientId,
  //   // isSignedIn: true,
  // })

  // const logout = () => console.log('logged out')

  const signOut = () => fire.auth().signOut()

  return (
    <div className="h-screen w-screen flex justify-center items-center font-serif">
      <div className="border rounded-md shadow-sm text-left inline-block p-10 border-[#ddd]">
        <h2 className="text-2xl mb-7">Sign In</h2>

        <button onClick={() => signInWithGoogle()}>Sign in with google</button>
        <button onClick={() => signOut()}>Sign out</button>

        {/* <button
          className="text-white bg-blue px-5 py-2 rounded"
          onClick={() => signIn()}
        >
          Sign In with google
        </button> */}

        {/* <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout> */}
      </div>
    </div>
  )
}

export default SignIn