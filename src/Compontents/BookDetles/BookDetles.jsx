import { useLoaderData, useParams } from "react-router-dom";
import { AddToStoredReadList, WishListAddToDataStroge } from "../../Utility/AddToDb";

const BookDetles = () => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing, tags } = useParams();
   

    const id = parseInt(bookId)
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    const hendleMarkAsReed =(id) =>{
        AddToStoredReadList(id)
    }
    const hendleAddToWishList = (id) =>{
        WishListAddToDataStroge(id)
    }

    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex justify-center">
                    <div className="w-[50%] justify-center flex items-center">
                        <img
                            src={book.image}
                            className="max-w-60 rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-[50%] flex flex-col items-start mr-10">
                        <h1 className="text-5xl font-bold mb-2">{book.bookName}</h1>
                        <p className="py-6">by:{book.author}</p>
                        <hr />
                        <p>{book.category}</p>
                        <hr />
                        <p className="mt-4">{book.review}</p>
                        <div className="flex gap-3 mb-4">
                            {
                                book.tags.map((tag,idx) => <button key={idx} className="flex btn btn-xs bg-green-300 text-green-900">#{tag}</button>)
                            }
                        </div>
                        <div className="flex gap-9">
                            <p>Number of Pages:</p>
                            <p className="font-bold">:{book.totalPages}</p>
                        </div>
                        <div className="flex gap-9">
                            <p>Publisher:</p>
                            <p className="ml-14 font-bold">:{book.publisher}</p>
                        </div>
                        <div className="flex gap-9">
                            <p>Year of Publishing</p>
                            <p className="font-bold">:{book.yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-9 mt-6">
                            <button onClick={() =>hendleMarkAsReed(bookId)} class="btn btn-active btn-accent">Read</button>
                            <button onClick={() =>hendleAddToWishList(bookId)} className="btn btn-outline">Wishlist</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetles;