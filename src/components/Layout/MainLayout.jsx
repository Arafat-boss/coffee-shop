import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-[25px]">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-237px)] container mx-auto px-12 py-12">
                 {/* main body */}
                 <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;