import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { BsFillPlayFill, BsStopFill } from "react-icons/bs";
import { AiOutlineBook } from "react-icons/ai";
import { IconContext } from "react-icons";
export default function DetailSurah() {
  const state = useLoaderData();

  // useEffect(() => {
  //     setPlay(state);
  // }, [state]);

  const handlePlay = (index) => {
    state.map((arr, i) => {
      if (i === index) {
        arr.alafasy.play();
        return { ...arr, play: true };
      }
      arr.alafasy.pause();
      return { ...arr, play: false };
    });
  };

  // const handlePause = (index) => {
  //   setAudio((arr) =>
  //     arr.map((sound, i) => {
  //       if (i === index) {
  //         sound.audio.pause();
  //         return { ...sound, play: false };
  //       }
  //       return { ...sound, play: false };
  //     })
  //   );
  // };

  // const tafsirModal = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <section className="flex flex-col w-4/5">
        {!state ? (
          <></>
        ) : (
          <>
            {state.map((data, i) => {
              return (
                <div className="p-10 flex flex-col" key={i}>
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-28 mb-5"
                  >
                    <div className="collapse-title text-xl font-medium">
                      {data.meta.juz}:{data.number.inSurah}
                    </div>
                    <div className="collapse-content">
                      {/* The button to open modal */}
                      <label
                        htmlFor={data.number.inSurah}
                        className="flex flex-row place-items-center"
                      >
                        <AiOutlineBook />
                        <span>Tafsir</span>
                      </label>
                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id={data.number.inSurah}
                        className="modal-toggle"
                      />
                      <label
                        htmlFor={data.number.inSurah}
                        className="modal cursor-pointer"
                      >
                        <div className="modal-box relative scrollbar-hide" htmlFor="">
                          <h3 className=" py-4 text-lg font-bold">Tafsir</h3>
                          <div>
                            <h3 className="text-md font-bold"> Jalalayn </h3>
                            <p className="">{data.tafsir["jalalayn"]}</p>
                          </div>
                          <div>
                            <h3 className="text-md font-bold"> Kemenag </h3>
                            <p className="">{data.tafsir["kemenag"].short}</p>
                          </div>
                          <div>
                            <h3 className="text-md font-bold"> Quraish </h3>
                            <p className="">{data.tafsir["quraish"]}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  {data.play ? (
                    <>
                      <button
                        name="play"
                        className="flex justify-start ml-5 mb-5"
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
                    </>
                  ) : (
                    <>
                      <button
                        name="stop"
                        className="flex justify-start ml-5 mb-5"
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
                            <BsStopFill />
                          </>
                        </IconContext.Provider>
                      </button>
                    </>
                  )}

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
