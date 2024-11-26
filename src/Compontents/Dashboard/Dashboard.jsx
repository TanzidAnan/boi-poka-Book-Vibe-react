import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getStrodeToWishList } from "../../Utility/AddToDb";

const Dashboard = () => {
    const allData =useLoaderData();
    console.log(allData)
    const strogeData =getStrodeToWishList();
    console.log(strogeData)
  
    const filterData =allData.filter(data => data.bookId == parseInt(strogeData))
    console.log(filterData)
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Dashboard</title>
            </Helmet>
            <h2 className="text-2xl">Dashboard</h2>
        </div>
    );
};

export default Dashboard;