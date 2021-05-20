import en from '@/locales/page-sections/landing-page/@Section-Main/en'
import hi from '@/locales/page-sections/landing-page/@Section-Main/hi'
import { useRouter } from 'next/router'

export const Enter_Email_And_Get_Started: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  return (
    <div className="mt-5">
      <h3 className="text-[18px]">{t.h3}</h3>

      <form className="md:mt-5 mt-2 flex lg:flex-row flex-col justify-center">
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id=""
            placeholder={t.placeholder}
            className="text-black focus:outline-none py-3 md:py-5 px-3 lg:rounded-l-sm lg:rounded-none rounded-sm md:w-[500px] w-full"
          />
        </label>

        <button className="lg:mt-0 mt-3 lg:m-0 m-auto bg-red hover:bg-[#f40612] lg:rounded-r-sm lg:rounded-none rounded-sm lg:px-7 px-[16px] py-[8px] px-4 lg:text-[30px] focus:outline-none flex items-center">
          {t.button}
          <span className="lg:ml-2 ml-1">
            <Chevron_Right_Arrow />
          </span>
        </button>
      </form>
    </div>
  )
}

const Chevron_Right_Arrow = () => (
  <>
    <svg
      viewBox="0 0 6 12"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:h-6 lg:w-6 h-3 w-3"
    >
      <desc>chevron</desc>
      <path
        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
        fill="white"
        fillRule="evenodd"
      ></path>
    </svg>
  </>
)
