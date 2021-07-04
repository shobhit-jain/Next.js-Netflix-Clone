import en from '@/locales/page-sections/landing-page/@Section-Profile-for-children/en'
import hi from '@/locales/page-sections/landing-page/@Section-Profile-for-children/hi'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Create_Profiles_For_Children: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  return (
    <section className="bg-black text-white py-16 border-t-8 border-[#222] font-serif">
      <div className="container m-auto lg:px-20 flex lg:flex-row flex-col-reverse lg:text-left text-center justify-between items-center">
        <div>
          <Image
            src={require('@/assets/section-images/create-profile-for-children.png')}
            width="600"
            height="450"
            className="z-10"
            placeholder="blur"
          />
        </div>

        <div className="md:ml-[50px]">
          <h1 className="xl:text-[50px] sm:text-[40px] text-[26px] font-700 mb-2 leading-tight">
            {t.h1}
          </h1>

          <h2 className="lg:text-[26px] lg:max-w-[700px] sm:text-[20px] text-[18px]">
            {t.h2}
          </h2>
        </div>
      </div>
    </section>
  )
}
