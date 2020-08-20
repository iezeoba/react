import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

// ========== Using react hooks and functional component ========== //

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
};
export default ThemeToggle;

// ========== Using class component ========== //

// class ThemeToggle extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context;
//         return (
//             <button onClick={toggleTheme}>Toggle Theme</button>
//         );
//     }
// };
// export default ThemeToggle;