import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom"
export default function DetailSurah(){
    const state  = useLoaderData();
    // const [play,stop] = useState(false)
    // let audio= new Audio()
    // const handleAudio = (e,temp) => {
    //     e.preventDefault();
    //     audio = temp
    //     audio.play()
    // }
    return (
        <div className="flex justify-center bg-slate-900">
            <section className="flex flex-col w-4/5">
                {!state ? (
                    <></>
                ) : (
                    <>
                    {state.data.ayahs.map((data,i) => {
                        return(
                            <div className="p-10 flex flex-col" key={i}>
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-28 mb-5">
                                    <div className="collapse-title text-xl font-medium">
                                        {data.meta.juz}:{data.number.inSurah}
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                    </div>
                                </div>
                                {/* <button className="flex justify-start ml-5 mb-5" onClick={(e)=> handleAudio(e,data.audio.alafasy)} >
                                    <label className="swap" >
                                        <input type="checkbox" />
                                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
                                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
                                    </label>
                                </button> */}
                                <p className="text-right text-2xl font-bold"><span className="border-4 rounded-full p-1 mr-2">{data.number.inSurah}</span><span>{data.arab}</span></p>
                                <p className="mt-10">{data.translation}</p>
                                
                            </div>
                        )
                    })}
                    </>
                )}
            </section>
            <section>
            </section>
        </div>
    )
}