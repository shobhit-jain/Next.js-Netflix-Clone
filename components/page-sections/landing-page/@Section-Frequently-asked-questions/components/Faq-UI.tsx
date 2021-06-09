import React from 'react'
import { Collapse } from 'react-collapse'

type Props = {
  title: string
}

export const Faq_UI: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className="bg-[#333] md:max-w-[700px] lg:max-w-[815px]  m-auto mb-2">
        <div
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className="flex justify-between cursor-pointer items-center py-5 border-b border-black px-5"
        >
          <h2 className="md:text-2xl text-xl">{title}</h2>

          <div
            className={`md:w-[26px] w-5 transform rotate-45 ${
              isOpen && 'rotate-0'
            }`}
          >
            <Collapse_Icon />
          </div>
        </div>

        <Collapse isOpened={isOpen}>
          <div className="text-left md:text-2xl text-xl p-5">
            <div>{children}</div>
          </div>
        </Collapse>
      </div>
    </>
  )
}

const Collapse_Icon = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="thin-x"
      viewBox="0 0 26 26"
      className="svg-icon svg-icon-thin-x svg-closed w- h-"
      focusable="true"
    >
      <desc>collapse</desc>
      <path
        d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  </>
)
