import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import ModalTafsir from "../components/modaltafsir";
import Audio from "../components/audio";
export default function DetailSurah() {
  const state = useLoaderData();
  const [item, setItem] = useState([]);
  const getItem = JSON.parse(localStorage.getItem(window.location.href) || '0')


  useEffect(() => {
    if (getItem !== 0) {
      setItem([...getItem])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(window.location.href, JSON.stringify(item))
  }, [item])

  const handlePlay = (index) => {
    if (item.includes(index)) {
      ;
    } else {
      setItem((prev) => ([...prev, index]))
    }
    state.map((arr, i) => {
      if (i === index) {
        arr.alafasy.play();
        return { ...arr, play: true };
      }
      arr.alafasy.pause();
      return { ...arr, play: false };
    });
  };

  const handlePause = (index) => {
    state.map((arr, i) => {
      if (i === index) {
        arr.alafasy.pause();
        return { ...arr, play: false };
      }
      return { ...arr, play: false };
    });
  };


  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <section className="flex flex-col w-full justify-center place-items-center">
        {!state ? (
          <></>
        ) : (
          <>
            {state.map((data, i) => {
              return (
                <div className="p-10 flex flex-col w-4/5" key={i}>
                  <ModalTafsir data={data} />
                  <div className="flex felx-col max-w-content">
                    <button
                      name="play"
                      className="flex justify-start mb-5"
                      onClick={() => handlePlay(i)}
                    >
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "50px",
                          className: "global-class-name",
                        }}
                      >
                        <>
                          <BsFillPlayFill />
                        </>
                      </IconContext.Provider>
                    </button>

                    <button
                      name="stop"
                      className="flex justify-start  mb-5"
                      onClick={() => handlePause(i)}
                    >
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "50px",
                          className: "global-class-name",
                        }}
                      >
                        <>
                          <BsFillPauseFill />
                        </>
                      </IconContext.Provider>
                    </button>
                  </div>
                  <p className="text-right text-2xl font-bold" style={{
                    color: item.includes(i) ? 'green' : "white"
                  }}>
                    <span className="border-4 rounded-full p-1 mr-2">
                      {data.number.inSurah}
                    </span>
                    <span>{data.arab}</span>
                  </p>
                  <p className="mt-10">{data.translation}</p>
                </div>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
}
