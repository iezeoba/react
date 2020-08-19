import React from 'react';
import NavBar from './NavBarComp.js';
import BookList from './BookListComp.js';
import ThemeContextProvider from '../../contexts/ThemeContext.js';
import ThemeToggle from './ThemeToggleComp.js';
import AuthContextProvider from '../../contexts/AuthContext.js';
import Heading from './HeadingComp.js';
import './ContextApp.css';

function ContextApp() {
    return (
        <div className="clContextAppContainer">
            <h1>Context App</h1>
            <div id="idContextAppContainer">
                <Heading />
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <NavBar />
                        <BookList />
                        <ThemeToggle />
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        </div>
    );
};
export default ContextApp;