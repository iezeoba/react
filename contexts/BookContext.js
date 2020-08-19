// ========== For Demonstration Only ========== //
// =====using hooks and functional component to create context ===== //

import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'The Richest Man in Babylon', id: 1 },
        { title: 'The Art of War', id: 2 },
        { title: 'The Room Where It Happened', id: 3 },
        { title: 'The Untouchables', id: 4 }
    ]);
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
};
export default BookContextProvider;

// ===== If using the above BookContextProvider, write BookList component thus: ===== //

// import React, { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
// import { BookContext } from '../contexts/BookContext';

// const BookList = () => {
//     const { isLightTheme, light, dark } = useContext(ThemeContext);
//     const { books } = useContext(BookContext);
//     const theme = isLightTheme ? light : dark;
//     return (
//         <div className="clBookList" style={{ color: theme.syntax, background: theme.bg }}>
//             <ul>
//                 {books.map(book => {
//                     return (
//                         <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default BookList;