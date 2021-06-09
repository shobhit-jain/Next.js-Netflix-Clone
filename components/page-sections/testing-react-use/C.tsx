import { v } from '@/pages/testing-react-use'
import React from 'react'

export const C: React.FC = () => {
  console.log('C = ', v)

  return <div>C : {v}</div>
}
