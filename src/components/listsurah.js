import { Link, useLoaderData } from "react-router-dom"
import { motion } from "framer-motion"
import sampul from "../image/sampul.png"
export default function ListSurah(){
    const state  = useLoaderData();
    const handleClick = (e,i) => {
        e.preventDefault();
        console.log(i+1)
    }
    return (
        <>
            <section>
                <div className="hero min-h-1/2" style={{ backgroundImage: `url("https://awsimages.detik.net.id/community/media/visual/2022/05/22/alquran.jpeg?w=1200")` }}>
                    <div className="hero-overlay bg-green-600/50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <img alt="sampul" src={sampul}/>
                            <h1 className="mb-5 text-5xl font-bold text-white">AL-QURAN NAKAMA</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-stone-400 grid grid-cols-3">
                <div className="col-span-3 p-6 flex justify-center">
                    <h1 className=" font-medium text-4xl text-black"> Daftar Surah</h1>
                </div>
                {!state ? (
                    <>Loading...</>
                ):(
                    <>
                        {state.data.map((e,i) => {
                            return(
                                <Link to={`${i+1}/ayahs`} className="ml-20 mr-20"  key={i}>
                                    <motion.div
                                            className="drop-shadow-lg flex flex-row p-10 bg-white"
                                            whileHover={{ scale: 1.1 }}
                                            
                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                            >
                                            <h1 className="text-black"> {e.number} </h1>
                                            <div className="divider divider-horizontal"></div>
                                            <div className="flex flex-col">
                                                <h1 className="font-bold"> {e.name} </h1>
                                                <p>{e.translation} </p>
                                            </div>
                                    </motion.div>
                                    <div className="divider"></div> 
                                </Link>
                            )
                        })}
                    </>
                )}
            </section>
        </>
    )
}