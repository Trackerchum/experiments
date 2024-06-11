import { AppProps } from 'next/app';
import React from 'react';
import './global.scss';

const Starter = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default Starter;
