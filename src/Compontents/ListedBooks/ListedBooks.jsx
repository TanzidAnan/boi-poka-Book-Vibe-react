import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <div className='text-start'>
            <h3 className="text-3xl my-8">List Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Book I read</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>my wish list</h2>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ListedBooks;