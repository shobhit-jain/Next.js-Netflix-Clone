import { NextPage } from 'next'
import React from 'react'
import { useToggle, useVibrate } from 'react-use'

export const Testing_React_Use: NextPage = () => {
  const [vibrating, toggleVibrating] = useToggle(false)

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
    </div>
  )
}

export default Testing_React_Use
