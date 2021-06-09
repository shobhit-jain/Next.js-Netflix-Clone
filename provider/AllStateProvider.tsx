import React from 'react'
import Dom_Element_Store from './store/demo/dom'

export const AllStateProvider: React.FC = ({ children }) => {
  return (
    <>
      <Dom_Element_Store.Provider>{children}</Dom_Element_Store.Provider>
    </>
  )
}
