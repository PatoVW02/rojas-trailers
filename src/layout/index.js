import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

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

            <Analytics />
        </>
    );
};

export default MainLayout;
