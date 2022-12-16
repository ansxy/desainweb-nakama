import { useEffect, useState } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IconContext } from "react-icons";
export default function CardList(props) {
    const state = props.data
    const [item, setItem] = useState([]);
    const getItem = JSON.parse(localStorage.getItem("alreadyPlayed") || "0");
    const navigate = useNavigate();
    const [playedAudio, setPlayedAudio] = useState([]);
    useEffect(() => {

    }, [playedAudio])

    useEffect(() => {
        if (getItem !== 0) {
            setItem([...getItem]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("alreadyPlayed", JSON.stringify(item));
    }, [item]);

    const handleClick = (i) => {
        if (item.includes(i)) {
        } else {
            setItem((prev) => [...prev, i]);
        }
    };

    const handlePlay = (index) => {
        state.map((arr, i) => {
            if (i === index) {
                arr.newAudio.play();
                setPlayedAudio(index)
                return { ...arr, play: true };
            }
            arr.newAudio.pause();
            return { ...arr, play: false };
        });
    };

    const handlePause = (index) => {
        state.map((arr, i) => {
            if (i === index) {
                arr.newAudio.pause();
                return { ...arr, play: false };
            }
            return { ...arr, play: false };
        });
    };
    return (
        <>
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
                                    <Link
                                        onClick={() => handleClick(i)}
                                        replace={true}
                                        to={`${i + 1}/ayahs`}
                                        className="flex flex-row text-black  hover:text-green-500"
                                    >
                                        <h1 className=""> {e.number} </h1>
                                        <div className="divider divider-horizontal"></div>
                                        <div className="flex flex-col">
                                            <h1
                                                className="font-bold
                                                    "
                                            >
                                                {" "}
                                                {e.name}{" "}
                                            </h1>
                                            <p className="text-gray-400">{e.translation} </p>
                                        </div>
                                    </Link>
                                    <div className="flex flex-grow flex-row-reverse">
                                        <button className="" onClick={() => handlePause(i)}>
                                            <IconContext.Provider
                                                value={{
                                                    color: "black",
                                                    size: "50px",
                                                    className: "global-class-name",
                                                }}
                                            >
                                                <>
                                                    <BsFillPauseFill />
                                                </>
                                            </IconContext.Provider>
                                        </button>
                                        <button className="" onClick={() => handlePlay(i)}>
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
                                    </div>
                                </motion.div>
                                <div className="divider"></div>
                            </div>
                        );
                    })}
                </>
            )}
        </>
    )
}