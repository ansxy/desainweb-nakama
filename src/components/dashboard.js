import Navbar from "./layouts/navbar";
import { Outlet, useLocation} from "react-router-dom";

import Footer from "./layouts/footer";


export default function Dashboard(){
    return (
        <>
            <header className="basis-auto">
                <Navbar/>
            </header>
            <div className="basis-auto bg-black mt-10">
                <Outlet />
            </div>
            <footer className="mt-auto bg-[#406C3C] text-white">
                <Footer/>
            </footer>
        </>
    )
}