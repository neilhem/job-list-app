import { Children } from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from "@nextui-org/react";

export default function AppDocument() {
  return (
    <Html lang="en" dir="ltr">
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  
  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles]),
  };
}