import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import LoadSurah from "../../lib/loadsurah";
import { useReadingProgress } from "./progressbar";

export default function Navbar() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const completion = useReadingProgress();
  useEffect(() => {
    const loadData = async () => {
      const res = await LoadSurah();
      setData(res);
    };
    loadData();
  });

  return (
    <div className="fixed w-full z-50 top-0 flex bg-gradient-to-r from-[#232526] to-[#414345]">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          AL-QURAN NAKAMA
        </a>
      </div>
      <div className="flex-none gap-2">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "white",
              width: "350px",
              borderColor: state.isFocused ? "grey" : "blue",
              cursor: "text",
            }),
          }}
          isSearchable
          options={data}
          onChange={(e) => {
            navigate(`/${e.value}/ayahs`);
          }}
        />
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
