import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NevBar from "../NevBar/NevBar";

const Root = () => {
    return (
        <div>
            <NevBar></NevBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;