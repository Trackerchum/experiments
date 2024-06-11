import React from 'react';
import Header from './header';
import Footer from './footer';

interface Props {
    readonly children: JSX.Element;
}

const App = ({ children }: Props) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <main className="container mb-auto">{children}</main>
            <Footer />
        </div>
    );
};

export default App;
