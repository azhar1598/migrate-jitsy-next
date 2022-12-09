import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {/* <script
            src="https://meet.jit.si/external_api.js"
            defer={true}
          ></script> */}
        </Head>
        <body>
          <div id="style"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
