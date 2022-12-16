import { useReadingProgress } from "../lib/progressbar";
import SearchBar from "../components/searchbar";

export default function Navbar() {
  const completion = useReadingProgress();

  return (
    <div className="fixed w-full z-50 top-0 flex bg-gradient-to-r from-[#232526] to-[#414345]">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          AL-QURAN NAKAMA
        </a>
      </div>
      <div className="flex-none gap-2 p-2">
        <SearchBar/>
      </div>
      <span
        id="progress-bar"
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-yellow-400`}
      />
    </div>
  );
}
