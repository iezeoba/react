import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        light: { textcolor: "#555", userinterface: "#ddd", bkground: "#eee" },
        dark: { textcolor: "#ddd", userinterface: "#333", bkground: "#555" }
    }

    handleToggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.handleToggleTheme }}> {/*Using a spread operator here copies the entire state object into the value */}
                {this.props.children} {/* This refers to the elements 'NavBar & BookList' which the ThemeContextProvider wraps in ContextAppComp */}
            </ThemeContext.Provider>
        );
    }
};
export default ThemeContextProvider;