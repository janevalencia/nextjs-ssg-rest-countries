
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
            <div className='w-full px-6 py-4 h-[65vh] bg-lt-mode-bg'>
                <h1 className='text-2xl'>🦄 Ooops ... 404! Page Not Found.</h1>
                <p className='text-lt-mode-text leading-10'>Click here to return to <Link href='/'><a className='text-blue-600'>homepage</a></Link>.</p>
            </div>
        </>
    );
}

export default NotFound;