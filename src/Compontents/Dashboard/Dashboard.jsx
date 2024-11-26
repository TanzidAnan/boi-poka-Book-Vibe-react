import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getStroedReadList } from "../../Utility/AddToDb";

const Dashboard = () => {
    const allData =useLoaderData();
    console.log(allData)
    const strogeData =getStroedReadList();
    console.log(strogeData)
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