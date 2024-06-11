import { NextPage } from 'next';
import React from 'react';
import HorizontalSpacer from '../../components/horizontalSpacer';
import App from '../../components/App';

const HomePage: NextPage = () => {
    return (
        <App>
            <div>
                <h1>Home</h1>
                <HorizontalSpacer />
            </div>
        </App>
    );
};

export default HomePage;
