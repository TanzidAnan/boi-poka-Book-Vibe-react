import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
    const allData =useLoaderData();
    console.log(allData)
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