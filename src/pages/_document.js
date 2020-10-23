import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import fs from "fs";
import path from "path";

class NewHead extends Head {
  getCssLinks({ allFiles }) {
    return allFiles
      .filter((file) => file.endsWith(".css"))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(".next", file), "utf-8"),
          }}
        />
      ));
  }
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <NewHead>
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </NewHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
