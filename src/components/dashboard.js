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
            <footer className="mt-auto bg-[#0066FF] flex justify-center text-white font-semibold">
                <Footer/>
            </footer>
        </>
    )
}