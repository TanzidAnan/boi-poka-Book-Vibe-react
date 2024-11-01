import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] =useState([]);
    useEffect( () =>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Books</h2>
            <p>{books.length}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map((book,idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;