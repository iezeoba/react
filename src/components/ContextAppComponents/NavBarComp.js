import React, { useContext } from 'react';      //useContext is imported cos we are using hooks and functional component //
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';

// ========== Using react hooks and functional component ========== //

const NavBar = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: theme.userinterface, color: theme.textcolor }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};
export default NavBar;

// ========== Using static context with ContextProvider [Method 1] ========== //

// class NavBar extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         console.log(this.context);
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;

//         return (
//             <nav style={{ background: theme.userinterface, color: theme.textcolor }}>
//                 <h1>Context App</h1>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         );
//     }
// };
// export default NavBar;

// ========== Alternatively use Context.Consumer approach ========== //

// class NavBar extends React.Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 const { isLightTheme, light, dark } = context;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                     <nav style={{ background: theme.userinterface, color: theme.textcolor }}>
//                         <h1>Context App</h1>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                 )
//             }}
//             </ThemeContext.Consumer>
//         );
//     }
// };
// export default NavBar;

// ========== To consume more than one context at a time ========== //

// class NavBar extends React.Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{ background: theme.userinterface, color: theme.textcolor }}>
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated ? 'Logged In' : 'Logged Out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         );
//     }
// };
// export default NavBar;