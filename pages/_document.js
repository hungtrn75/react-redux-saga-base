import Document, { Head, Main, NextScript } from 'next/document'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel='stylesheet' href='./../static/css/login.css' />
                    <link rel='stylesheet' href='./../static/css/App.css' />
                    <link rel='stylesheet' href='./../static/css/nprogress.css' />
                </Head>
                <body className="is-preload" id="is-body">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}