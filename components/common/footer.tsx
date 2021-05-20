import en from '@/locales/common/@Section-Footer/en'
import hi from '@/locales/common/@Section-Footer/hi'
import { useRouter } from 'next/router'
import React from 'react'

export const Footer: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  return (
    <div className="bg-black text-light_grey py-16 border-t-8 border-[#222]">
      <div className="container m-auto lg:px-40">
        <p>
          {t.p1}{' '}
          {locale !== 'en' ? (
            ''
          ) : (
            <a href="#" className="hover:underline">
              000-800-040-1843
            </a>
          )}
        </p>

        <p className="text-xs mt-5">Netflix India</p>
      </div>
    </div>
  )
}
