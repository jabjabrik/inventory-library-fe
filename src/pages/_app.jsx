import Head from 'next/head'
// import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '/src/styles/datatable.css'
import NavBar from '../layouts/NavBar';
import '../styles/globals.css'
// import { initDataTable } from '../utils';

function MyApp({ Component, pageProps }) {
    // const [isCompletedImport, setCompletedImport] = useState(false)

    // useEffect(() => {
    //     if (isCompletedImport) {
    //         initDataTable()
    //     }
    // }, [isCompletedImport, Component]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/* <Script
                src="/script/jquery.js"
                onLoad={() => setCompletedImport(true)}
            /> */}
            <NavBar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
