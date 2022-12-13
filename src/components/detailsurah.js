import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiOutlineBook } from "react-icons/ai";
import { IconContext } from "react-icons";
export default function DetailSurah() {
  const state = useLoaderData();
  const [item,setItem] = useState();

  useEffect(() => {
    localStorage.setItem(window.location.href, JSON.stringify(item));
  }, [item])
  

  const handlePlay = (index) => {
    state.map((arr, i) => {
      if (i === index) {
        setItem(i)
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

  const handleFull = () => {};

  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <section className="flex justify-center  w-full">
        <button
          name="play"
          className="flex justify-start mb-5" 
          onClick={() => handleFull()}
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
          onClick={() => handlePause()}
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
      </section>
      <section className="flex flex-col w-full justify-center place-items-center">
        {!state ? (
          <></>
        ) : (
          <>
            {state.map((data, i) => {
              return (
                <div className="p-10 flex flex-col w-4/5" key={i}>
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-28 mb-5"
                  >
                    <div className="collapse-title text-xl font-medium">
                      {data.meta.juz}:{data.number.inSurah}
                    </div>
                    <div className="collapse-content">
                      <label
                        htmlFor={data.number.inSurah}
                        className="flex flex-row place-items-center"
                      >
                        <AiOutlineBook />
                        <span>Tafsir</span>
                      </label>
                      <input
                        type="checkbox"
                        id={data.number.inSurah}
                        className="modal-toggle"
                      />
                      <label
                        htmlFor={data.number.inSurah}
                        className="modal cursor-pointer"
                      >
                        <div
                          className="modal-box relative scrollbar-hide"
                          htmlFor=""
                        >
                          <h3 className=" py-4 text-3xl font-bold">Tafsir</h3>
                          <div>
                            <h3 className="text-xl font-bold m-3">
                              {" "}
                              Jalalayn{" "}
                            </h3>
                            <p className="">{data.tafsir["jalalayn"]}</p>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold m-3"> Kemenag </h3>
                            <p className="">{data.tafsir["kemenag"].short}</p>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold m-3"> Quraish </h3>
                            <p className="">{data.tafsir["quraish"]}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
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

                  <p className="text-right text-2xl font-bold">
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
      <section></section>
    </div>
  );
}
