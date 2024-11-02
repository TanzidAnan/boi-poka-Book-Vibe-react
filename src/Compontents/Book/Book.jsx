import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,image, bookName, author, tags, category } = book
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-slate-100 w-96 shadow-md p-6">
                <figure className='bg-gray-400 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-5'>
                        {
                            tags.map((tag,idx) => <button key={idx} className='btn btn-xs bg-green-200 text-green-900'>{tag}</button>)
                        }
                    </div>
                    <h1 className='text-lg font-bold text-start mt-2'>{bookName}</h1>

                    <p className='text-start font-semibold'>By:{author}</p>
                    <div className="border-2 border-dashed text-black my-1"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;