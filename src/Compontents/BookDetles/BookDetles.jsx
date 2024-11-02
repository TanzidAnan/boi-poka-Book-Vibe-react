import { useLoaderData, useParams } from "react-router-dom";

const BookDetles = () => {
    const { bookId } = useParams();
    const id =parseInt(bookId)
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    console.log(book);
    console.log(data)

    return (
        <div>
            <h1>Book Details {bookId}</h1>
        </div>
    );
};

export default BookDetles;