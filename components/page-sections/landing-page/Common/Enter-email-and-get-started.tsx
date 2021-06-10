import en from '@/locales/page-sections/landing-page/@Section-Main/en'
import hi from '@/locales/page-sections/landing-page/@Section-Main/hi'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'react-use'
import { useForm } from 'react-hook-form'

export const Enter_Email_And_Get_Started: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : hi

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const [userInputEmail, setUserInputEmail] = useLocalStorage(
    'user-input-email',
    ''
  )

  const onSubmit = (data: any) => {
    setUserInputEmail(data.email)
  }

  return (
    <div className="mt-5">
      <h3 className="sm:text-[18px] text-[16px]">{t.h3}</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:mt-5 mt-2 flex lg:flex-row flex-col justify-center"
      >
        <label
          htmlFor="email"
          className="relative md:w-[500px] w-full m-auto lg:m-0"
        >
          <input
            {...register('email', { required: true })}
            type="email"
            name="email"
            defaultValue={userInputEmail}
            placeholder={t.placeholder}
            className={`text-black focus:outline-none py-3 md:py-5 px-3 lg:rounded-l-sm lg:rounded-none rounded-sm md:w-[500px] w-full  ${
              errors.email?.type === 'required' &&
              'border-b-[2px] border-[#ff9f38]'
            }`}
          />

          {errors.email?.type === 'required' && (
            <p className="text-[#ff9f38] sm:text-base text-tiny absolute mt-1 ml-1">
              {locale === 'en' ? 'Email is required' : 'ईमेल डालना ज़रूरी है!'}
            </p>
          )}
        </label>

        <button className="lg:mt-0 mt-3 lg:m-0 m-auto bg-red hover:bg-[#f40612] lg:rounded-r-sm lg:rounded-none rounded-sm lg:px-7 px-[16px] py-[8px] lg:text-[30px] focus:outline-none flex items-center">
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
