import { Link, useLoaderData } from "react-router-dom"
import { motion } from "framer-motion"
import sampul from "../image/sampul.png"
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function ListSurah() {
    const state = useLoaderData();
    const handleClick = (e, i) => {
        e.preventDefault();
        console.log(i + 1)
    }

    const handlePlay = (index) =>{
        state.map((arr, i) => {
            if (i === index) {
              arr.newAudio.play();
              return { ...arr, play: true };
            }
            arr.newAudio.pause();
            return { ...arr, play: false };
          });
    }

    return (
        <>
            <section>
                <div className="hero min-h-1/2" style={{ backgroundImage: `url("https://awsimages.detik.net.id/community/media/visual/2022/05/22/alquran.jpeg?w=1200")` }}>
                    <div className="hero-overlay bg-green-600/50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <img alt="sampul" src={sampul} />
                            <h1 className="mb-5 text-5xl font-bold text-black">AL-QURAN NAKAMA</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-stone-400 grid grid-cols-3">
                <div className="col-span-3 p-6 flex justify-center">
                    <h1 className=" font-medium text-4xl text-black">Daftar Surah</h1>
                </div>
                {!state ? (
                    <>Loading...</>
                ) : (
                    <>
                        {state.map((e, i) => {
                            return (
                                <div className="ml-20 mr-20" key={i}>
                                    <motion.div
                                        className="drop-shadow-lg flex flex-row p-10 bg-white"
                                        whileHover={{ scale: 1.1 }}

                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    >   
                                        <Link to={`${i + 1}/ayahs`}>
                                            <h1 className="text-black"> {e.number} </h1>
                                            <div className="divider divider-horizontal"></div>
                                            <div className="flex flex-col">
                                                <h1 className="font-bold"> {e.name} </h1>
                                                <p>{e.translation} </p>
                                            </div>
                                        </Link>
                                        <button className="flex flex-grow flex-row-reverse" onClick={()=> handlePlay(i)}>
                                            <IconContext.Provider
                                                value={{
                                                    color: "black",
                                                    size: "50px",
                                                    className: "global-class-name",
                                                }}
                                            >
                                                <>
                                                    <BsFillPlayFill />
                                                </>
                                            </IconContext.Provider>
                                        </button>
                                    </motion.div>
                                    <div className="divider">

                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </section>
        </>
    )
}