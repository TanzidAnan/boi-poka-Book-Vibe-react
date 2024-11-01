import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
             <p className='text-5xl font-extrabold'>404</p>
            <h1 className='text-4xl font-extrabold '>Oops!</h1>
           
            <p className='font-bold'>Sorry, an unexpected error has occurred.</p>
            
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;