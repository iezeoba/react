import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
    state = {
        isAuthenticated: false,
    }

    handleToggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.handleToggleAuth }}> {/*Using a spread operator here copies the entire state object into the value */}
                {this.props.children} {/* This refers to the elements 'NavBar & BookList' which the ThemeContextProvider wraps in ContextAppComp */}
            </AuthContext.Provider>
        );
    }
};
export default AuthContextProvider;