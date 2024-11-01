import React from 'react';

const Book = ({ book }) => {
    console.log(book);
    const { image, bookName, author } = book
    return (
        <div className="card bg-slate-100 w-96 shadow-md p-6">
            <figure className='bg-gray-400 py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-start'>By:{author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;