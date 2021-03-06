import { NextPage } from 'next'

export const Offline_Fallback_Page: NextPage = () => (
  <div className="bg-red h-screen text-white text-center flex items-center justify-center flex-col">
    <h1>You are not connected to internet !</h1>
    <h2 className="mt-5">
      Your page is not cached to show you the content for this page, when
      offline.
    </h2>
  </div>
)

export default Offline_Fallback_Page
