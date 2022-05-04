import React from 'react'
import BookData from '../TestData.json'
import BookInfo from './BookInfo';

function BookList() {
    const books = [];
    for (let i=0; i<20; i++){
        books.push(BookData[i]);
    }
    return (
        <div className='book-list'>
            <h1>Our Books</h1>
            {books.map(book => <BookInfo book={book} />)}
        </div>
    )
}

export default BookList