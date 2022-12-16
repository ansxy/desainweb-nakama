import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function RandomButton() {
    const navigate = useNavigate();
    const randomHandler = (e) => {
      const nomorSurahRandom = Math.floor(Math.random() * (114 + 1) + 1);
      navigate(`${nomorSurahRandom}/ayahs`);
    };
    return (
        <>
            <button
                onClick={randomHandler}
                title="random"
                className="fixed z-90 bottom-10 right-8 bg-zinc-800/50 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-zinc-800"
            >
                <GiPerspectiveDiceSixFacesRandom />
            </button>
        </>
    )
}