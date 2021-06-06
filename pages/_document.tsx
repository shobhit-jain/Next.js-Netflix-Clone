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

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html>
        <InlineStylesHead>
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
