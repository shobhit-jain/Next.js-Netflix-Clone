import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

const domain_prefix = 'https://netflix-web.vercel.app'

const MetaData = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {/* preloading fonts */}
      <link
        rel="preload"
        href={`${domain_prefix}/fonts/Inter/Inter-Regular.ttf`}
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href={`${domain_prefix}/fonts/Inter/Inter-Medium.ttf`}
        as="font"
        crossOrigin=""
      />

      {/* icons */}
      <link
        rel="icon"
        href={`${domain_prefix}/images/favicon/favicon.ico`}
        type="image/x-icon"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${domain_prefix}/images/favicon/favicon-32x32.png`}
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${domain_prefix}/images/favicon/favicon-16x16.png`}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${domain_prefix}/images/favicon/apple-touch-icon.png`}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Netflix" />

      <link
        rel="mask-icon"
        href={`${domain_prefix}/images/favicon/safari-pinned-tab.svg`}
        color="#e50914"
      />

      {/* site manifest */}
      <link
        rel="manifest"
        href={`/site.webmanifest`}
        crossOrigin="use-credentials"
      />

      {/* web-app title for chrome */}
      <meta name="application-name" content="Netflix" />

      {/* web-app title for apple */}
      <meta name="apple-mobile-web-app-title" content="Netflix" />

      {/* theme color for web-app */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </>
  )
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <MetaData />
        </Head>

        <body>
          <noscript>
            <meta httpEquiv="refresh" content="1; url=about:blank" />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
