import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import {AiOutlineBook} from "react-icons/ai" 
export default function DetailSurah() {
  const state = useLoaderData();
  const [prevaudio, setprevAudio] = useState("");
  const [play, stop] = useState(false);
  const audioRef = useRef(new Audio(prevaudio));
  const handleAudio = (e, temp) => {
    
    const audio = new Audio(audioRef.current.value)
    audio.pause()
    audio.currentTime = 0
    audio.play()
  };

  const tafsirModal = (e) => {
    e.preventDefault();
  };

  console.log(state);
  return (
    <div className="flex justify-center bg-slate-900">
      <section className="flex flex-col w-4/5">
        {!state ? (
          <></>
        ) : (
          <>
            {state.data.ayahs.map((data, i) => {
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
                      <label htmlFor={data.number.inSurah} className="flex flex-row place-items-center">
                        <AiOutlineBook/>
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
                        <label className="modal-box relative" htmlFor="">
                          <h3 className=" py-4 text-lg font-bold">Tafsir</h3>
                          <div>
                            <h3 className="text-md font-bold"> Jalalayn </h3>
                            <p className="">{data.tafsir["jalalayn"]}</p>
                          </div>
                          <div>
                            <h3 className="text-md font-bold"> Kemenag </h3>
                            <p className="">{data.tafsir["kemenag"].short   }</p>
                          </div>
                          <div>
                            <h3 className="text-md font-bold"> Quraish </h3>
                            <p className="">{data.tafsir["quraish"]}</p>
                          </div>
                        </label>
                      </label>
                    </div>
                  </div>
                  <button
                    ref={audioRef}
                    key={i}
                    id={i}
                    className="flex justify-start ml-5 mb-5"
                    value={data.audio.alafasy}
                    onClick={(e) => handleAudio(e, data.audio.alafasy)}
                  >
                    {play ? <> Playing </> : <>stop</>}
                  </button>
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
