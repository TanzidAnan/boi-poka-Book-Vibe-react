import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStroedReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(() => {
        const strogeReadList = getStroedReadList();
        const strogeReadListInt = strogeReadList.map(id => parseInt(id));
        const readBooksList = allBooks.filter(book => strogeReadListInt.includes(book.bookId))
        setReadList(readBooksList)
        console.log(readBooksList)
    }, [])

    return (
        <div className='text-start'>
            <h3 className="text-3xl my-8">List Books</h3>

            <div className="dropdown flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-900">Shot By</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Rating</a></li>
                    <li><a>No of pages</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Book I read: {readList.length}</h2>
                    <div className='grid grid-cols-3 gap-16'>
                        {
                            readList.map((book, idx) => <Book key={idx} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>my wish list</h2>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ListedBooks;