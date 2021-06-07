import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import fs from 'fs'
import path from 'path'

const domain_prefix = 'https://netflix-web.vercel.app'

class InlineStylesHead extends Head {
  getCssLinks({ allFiles }: { allFiles: any }) {
    const { assetPrefix } = this.context
    if (!allFiles || allFiles.length === 0) return null

    return allFiles
      .filter((file: any) => /\.css$/.test(file))
      .map((file: any) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(
              path.join(process.cwd(), '.next', file),
              'utf-8'
            ),
          }}
        />
      ))
  }
}

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
        href={`${domain_prefix}/images/favicon/favicon.ico"`}
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
      <link rel="manifest" href={`${domain_prefix}/site.webmanifest`} />

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
    return await Document.getInitialProps(ctx)
  }

  render(): JSX.Element {
    return (
      <Html>
        <InlineStylesHead>
          <MetaData />
        </InlineStylesHead>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
