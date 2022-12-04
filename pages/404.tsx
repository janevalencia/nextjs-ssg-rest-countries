
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound : NextPage = () => {
    return (
        <>
            <Head>
                <title>Ooops! Page Not Found.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='page-container w-full px-6 laptop:px-16 py-4 min-h-[70vh] bg-lt-mode-bg flex flex-col justify-center'>
                <h1 className='text-2xl'>🦄 Ooops ... 404! Page Not Found.</h1>
                <p className='text-lt-mode-text leading-10'>Click here to return to <Link href='/'><a className='return-link'>homepage</a></Link>.</p>
            </div>
        </>
    );
}

export default NotFound;