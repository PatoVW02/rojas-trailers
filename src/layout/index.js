import { Outlet } from "react-router-dom";

import Navbar from "../component/Common/Navbar";
import Footer from "../component/Common/Footer";
import CopyRight from "../component/Common/CopyRight";

const MainLayout = () => {
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer/>
                <CopyRight/>
            </div>
        </>
    );
};

export default MainLayout;
