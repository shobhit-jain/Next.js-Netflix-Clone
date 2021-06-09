import { C } from '@/components/page-sections/testing-react-use/C'
import { NextPage } from 'next'
import React from 'react'
import { createGlobalState, useToggle, useVibrate } from 'react-use'
export let v = 0 // sharing state value to components

const useGlobalValue = createGlobalState<number>(0)

export const Testing_React_Use: NextPage = () => {
  const [vibrating, toggleVibrating] = useToggle(false)
  const [value] = useGlobalValue()

  useVibrate(vibrating, [300, 100, 200, 100, 1000, 300], true)

  return (
    <div className="text-center">
      <div className="py-5 text-xl bg-blue text-white mb-5">
        Testing React Use
      </div>

      <div>
        <button
          className="bg-blue p-2 rounded text-white"
          onClick={toggleVibrating}
        >
          {vibrating ? 'Stop' : 'Vibrate'}
        </button>
      </div>

      <A />
      <B />
      <div>{value}</div>
      <C />
    </div>
  )
}

const A = () => {
  const [value, setValue] = useGlobalValue()

  console.log(value)

  console.log('v = ', v)

  return (
    <>
      <button
        onClick={() => {
          v = value + 1
          setValue(value + 1)
        }}
      >
        increase first
      </button>
      <div>{value}</div>
    </>
  )
}

const B = () => {
  const [value, setValue] = useGlobalValue()

  console.log(value)

  //
  return (
    <>
      <button
        onClick={() => {
          v = value + 1
          setValue(value + 1)
        }}
      >
        increase Second
      </button>
      <div>{value}</div>
    </>
  )
}

export default Testing_React_Use
