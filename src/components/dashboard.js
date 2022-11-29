import Navbar from "./layouts/navbar";
import { Outlet, useLocation} from "react-router-dom";
import Footer from "./layouts/footer";


export default function Dashboard(){
    return (
        <>
            <header className="basis-auto">
                <Navbar/>
            </header>
            <div className="basis-auto bg-black">
                <Outlet />
            </div>
            <footer className="mt-auto bg-[#406C3C] text-white">
                <Footer/>
            </footer>
        </>
    )
}