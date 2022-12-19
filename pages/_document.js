import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="At Autify Network, we are building a blockchain trust protocol to boost the efficiency, transparency, and authenticity of information transfer in the global supply chain, retail, insurance and rewards industry."
        />
        <meta title="Blockchain solution for global supply chain, retail, insurance, rewards | Autify Network." />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
     */}
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        />

        {/* <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"
        /> */}

        {/* Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`. */}
      </Head>
      <body>
        <Main />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.GTM_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-${process.env.GTM_ID}');
        `}
        </Script>

        <NextScript />
      </body>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
        defer="true"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
        defer="true"
      ></script>
    </Html>
  );
}
