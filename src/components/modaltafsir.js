import { AiOutlineBook } from "react-icons/ai";

export default function ModalTafsir(data) {
    return (
        <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-28 mb-5"
        >
            <div className="collapse-title text-xl font-medium">
                {data.data.meta.juz}:{data.data.number.inSurah}
            </div>
            <div className="collapse-content">
                <label
                    htmlFor={data.data.number.inSurah}
                    className="flex flex-row place-items-center"
                >
                    <AiOutlineBook />
                    <span>Tafsir</span>
                </label>
                <input
                    type="checkbox"
                    id={data.data.number.inSurah}
                    className="modal-toggle"
                />
                <label
                    htmlFor={data.data.number.inSurah}
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
                            <p className="">{data.data.tafsir["jalalayn"]}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold m-3"> Kemenag </h3>
                            <p className="">{data.data.tafsir["kemenag"].short}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold m-3"> Quraish </h3>
                            <p className="">{data.data.tafsir["quraish"]}</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}