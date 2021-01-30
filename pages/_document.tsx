import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="author" content="IP2Tracker" />
          <meta
            name="description"
            content="Instantly find the current geolocation of the IP/URL searched.
Locations are the most accurate available. Useful in the prevention of online fraud and hacking."
          />
          <meta
            name="keywords"
            content="ip2place, ip, ip address, tracker, search ip, ip geolocation, location, geolocation, myip"
          />

          <meta
            name="google-site-verification"
            content="Gy5EFTeucGOTohOucovRJIzCaWPkQ1qWs3mktuSNyGw"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
