import en from '@/locales/page-sections/landing-page/@Section-Frequently-asked-questions/en'
import hi from '@/locales/page-sections/landing-page/@Section-Frequently-asked-questions/hi'
import { useRouter } from 'next/router'
import React from 'react'
import { Enter_Email_And_Get_Started } from '../Common/Enter-email-and-get-started'
import { Faqs_Accordion } from './components/Faqs-Accordion'

export const Frequently_Asked_Questions: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  return (
    <>
      <section className="bg-black text-white py-16 border-t-8 border-[#222] font-serif text-center">
        <h1 className="xl:text-[50px] sm:text-[40px] text-[26px] font-700 mb-10 px-[20px]">
          {t.h1}
        </h1>

        <Faqs_Accordion />

        <div className="px-[20px] mt-7">
          <Enter_Email_And_Get_Started />
        </div>
      </section>
    </>
  )
}
