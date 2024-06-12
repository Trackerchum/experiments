import { NextPage } from 'next';
import React from 'react';
import HorizontalSpacer from '../../components/horizontalSpacer';
import App from '../../components/App';
import Button from '../../components/form/button';
import { fetcher, generateQueryString, normaliseUrl } from '../../helpers/FetchHelpers';

const HomePage: NextPage = () => {
    const onSubmit = async () => {
        const queryString = generateQueryString({
            stringParam: 'string param',
            singleEleArray: ['only string element'],
            multiEleArray: ['first string element', 'second string element with, comma', 'third string element'],
            numberArray: [4, 23, 54],
        });
        const response = await fetcher(normaliseUrl(`http://localhost:8000${queryString}`));
        console.log('response: ', response);
    };

    return (
        <App>
            <div>
                <h1>Home</h1>
                <HorizontalSpacer />
                <Button text="CALL BACKEND" onSubmit={onSubmit} />
            </div>
        </App>
    );
};

export default HomePage;
