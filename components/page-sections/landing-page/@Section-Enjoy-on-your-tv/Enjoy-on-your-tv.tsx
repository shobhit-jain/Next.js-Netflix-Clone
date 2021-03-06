import en from '@/locales/page-sections/landing-page/@Section-Enjoy-on-your-tv/en'
import hi from '@/locales/page-sections/landing-page/@Section-Enjoy-on-your-tv/hi'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Enjoy_On_Your_Tv: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  return (
    <section className="bg-black text-white py-16 border-t-8 border-[#222] font-serif">
      <div className="container m-auto lg:px-20 flex lg:flex-row flex-col lg:text-left text-center justify-between items-center">
        <div className="md:mr-[50px]">
          <h1 className="xl:text-[50px] sm:text-[40px] text-[26px] font-700 mb-2">
            {t.h1}
          </h1>

          <h2 className="lg:text-[26px] lg:max-w-[600px] sm:text-[20px] text-[18px]">
            {t.h2}
          </h2>
        </div>

        <div className="relative">
          <Image
            src={require('@/assets/section-images/enjoy-on-tv.png')}
            width="550"
            height="400"
            className="z-10"
            placeholder="blur"
          />

          <video
            autoPlay
            playsInline
            muted
            loop
            className="px-[12%] absolute top-[17%]"
            src={require('@/assets/videos/enjoy-on-your-tv.mp4')}
          />
        </div>
      </div>
    </section>
  )
}
