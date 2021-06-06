import * as React from 'react'
import NextHead from 'next/head'

type Props = {
  title: string
}

export const Head: React.FC<Props> = ({ title }) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>
    </NextHead>
  </>
)
