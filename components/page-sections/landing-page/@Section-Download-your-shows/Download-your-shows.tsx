import en from '@/locales/page-sections/landing-page/@Section-Download-your-shows/en'
import hi from '@/locales/page-sections/landing-page/@Section-Download-your-shows/hi'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Download_Your_Shows: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  return (
    <section className="bg-black text-white py-16 border-t-8 border-[#222] font-serif">
      <div className="container m-auto lg:px-20 flex lg:flex-row flex-col-reverse lg:text-left justify-between items-center">
        <div className="relative flex justify-center">
          <Image
            src={require('@/assets/section-images/stranger-things-girl.jpg')}
            width="750"
            height="550"
          />

          <div className="bg-black border-2 flex items-center justify-between absolute lg:top-[65%] top-[65%] sm:top-[80%] md:w-[70%] w-full border-[#333] rounded-xl px-3 py-3">
            <div className="flex items-center">
              <Image
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                width="50"
                height="75"
              />

              <div className="ml-5 font-serif">
                <p className="font-600">Stranger Things</p>
                <p className="text-blue text-[14px]">{t.p}</p>
              </div>
            </div>

            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              width="50"
              height="50"
            />
          </div>
        </div>

        <div className="lg:pl-[100px] text-center lg:text-left">
          <h1 className="xl:text-[50px] sm:text-[40px] text-[26px] font-700 mb-2 leading-tight">
            {t.h1}
          </h1>

          <h2 className="lg:text-[26px] lg:max-w-[600px] sm:text-[20px] text-[18px]">
            {t.h2}
          </h2>
        </div>
      </div>
    </section>
  )
}
