import * as React from 'react'
import { NextSeo } from 'next-seo'

type Props = {
  title: string
  description?: string
  canonical?: string
  openGraph_image_url?: string
  openGraph_title?: string
  openGraph_description?: string
}

export const Head: React.FC<Props> = ({
  title,
  description,
  canonical,
  openGraph_description,
  openGraph_title,
  openGraph_image_url,
}) => (
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
        url: openGraph_image_url,
        title: openGraph_title,
        description: openGraph_description,
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
