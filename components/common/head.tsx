import * as React from 'react'
import { NextSeo } from 'next-seo'

type Props = {
  title: string
  description?: string
  canonical?: string
  openGraph_image_url?: string
  openGraph_title?: string
  openGraph_description?: string
  openGraph_site_url?: string
}

export const Head: React.FC<Props> = ({ title, description, canonical }) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      nofollow={false}
      noindex={false}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: '',
        title: 'Netflix',
        description: 'Watch Movies',
        site_name: 'https://netflix-web.vercel.app',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  </>
)
