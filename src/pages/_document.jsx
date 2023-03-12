import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css"
                    rel="stylesheet"
                // crossOrigin="anonymous"
                /> */}
                {/* <link
                    href="https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css"
                    rel="stylesheet"
                // crossOrigin="anonymous"
                /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}