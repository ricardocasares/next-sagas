import Document, {
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import { extractCritical } from "@emotion/server";

type EmotionProps = ReturnType<typeof extractCritical>;

export default class MyDocument extends Document<DocumentProps & EmotionProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
