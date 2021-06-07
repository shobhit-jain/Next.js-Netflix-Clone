import * as React from 'react'
import NextHead from 'next/head'

type Props = {
  title: string
}

export const Head: React.FC<Props> = ({ title }) => (
  <>
    <NextHead>
      <title>{title}</title>
    </NextHead>
  </>
)
