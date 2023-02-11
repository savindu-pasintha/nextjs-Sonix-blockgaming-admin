import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../styles/theme';
import createEmotionCache from '../components/cache/emotion-cache';
import { now } from "moment";
import { sha256 } from "../utils/functions";
import Script from 'next/script'
/**
 * Generate Content Security Policy for the app.
 * Uses randomly generated nonce (base64)
 *
 * @returns [csp: string, nonce: string] - CSP string in first array element, nonce in the second array element.
 */
const generateCsp = (): [csp: string, nonce: string] => {
  const production = process.env.NODE_ENV === 'production';

  // generate random nonce converted to base64. Must be different on every HTTP page load
  const nonce = sha256(now().toString(10));

  let csp = ``;
  csp += `default-src 'none';`;
  csp += `img-src 'self' data:;`;
  csp += `base-uri 'self';`;
  csp += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
  csp += `script-src 'nonce-${nonce}' 'self' ${production ? '' : "'unsafe-eval'"};`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
  csp += `font-src https://fonts.gstatic.com;`;
  csp += `connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL};`;

  return [csp, nonce];
};

class MyDocument extends Document {

  render() {
    const [csp, nonce] = generateCsp();
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta property='csp-nonce' content={nonce} />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
        <Script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>
        
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};

export default MyDocument;
