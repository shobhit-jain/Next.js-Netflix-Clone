import Dom_Element_Store from '@/provider/store/demo/dom'
import { NextPage } from 'next'
import React from 'react'

const Testing_State: NextPage = () => {
  const items = Dom_Element_Store.useStoreState((state) => state.items)
  const flowers = Dom_Element_Store.useStoreState((state) => state.flowers)

  console.log(items)

  return (
    <div>
      <h1 className="text-center py-5 bg-blue text-white">
        Testing State ( easy - peasy )
      </h1>

      <div className="text-center">
        <button
          onClick={Dom_Element_Store.useStoreActions(
            (action) => action.increaseItem
          )}
          className="bg-blue mt-2 mr-5 text-white p-2 rounded"
        >
          Increase item
        </button>

        <button
          onClick={Dom_Element_Store.useStoreActions(
            (action) => action.decreaseItem
          )}
          className="bg-blue mt-2 text-white p-2 rounded"
        >
          Decrease item
        </button>

        <div>items : {items}</div>
      </div>

      <div className="text-center">
        <button
          onClick={Dom_Element_Store.useStoreActions(
            (action) => action.increaseFlower
          )}
          className="bg-blue mt-2 mr-5 text-white p-2 rounded"
        >
          Increase flower
        </button>

        <div>flowers : {flowers}</div>
      </div>
    </div>
  )
}

export default Testing_State
