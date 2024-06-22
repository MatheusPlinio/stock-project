import React from 'react';
import AuthDialog from './auth/AuthDialog';
import RegisterDialog from './auth/RegisterDialog';

const Header: React.FC = () => {
    return (
        <header
            className="fixed top-0 left-0 w-full
                       h-16 flex items-center justify-between
                       px-4 p-8 border-b-2 bg-white z-50"
        >
            <div className="flex items-center">
                <img
                    src="https://img.logoipsum.com/243.svg"
                    className="h-10 w-10"
                    alt="Logo"
                />
                <h1 className="ml-3 text-lg font-semibold">My Application</h1>
            </div>
            <nav style={{ marginRight: '10%' }}>
                <ul className="flex space-x-4 items-center">
                    <li><AuthDialog /></li>
                    <li><RegisterDialog /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
