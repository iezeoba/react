import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

// ========== Using react hooks and functional component ========== //
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="clBookList" style={{ color: theme.textcolor, background: theme.bkground }}>
            <ul>
                <li style={{ background: theme.userinterface }}>The Richest Man in Babylon</li>
                <li style={{ background: theme.userinterface }}>The Art of War</li>
                <li style={{ background: theme.userinterface }}>The Room Where It Happened</li>
            </ul>
        </div>
    );
};
export default BookList;

// ========== Using class component ========== //

// class BookList extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="clBookList" style={{ color: theme.textcolor, background: theme.bkground }}>
//                 <ul>
//                     <li style={{ background: theme.userinterface }}>The Richest Man in Babylon</li>
//                     <li style={{ background: theme.userinterface }}>The Art of War</li>
//                     <li style={{ background: theme.userinterface }}>The Room Where It Happened</li>
//                 </ul>
//             </div>
//         );
//     }
// };
// export default BookList;