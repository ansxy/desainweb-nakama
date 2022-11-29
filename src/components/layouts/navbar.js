import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import LoadSurah from "../../lib/loadsurah";

export default function Navbar() {
    const [filter, setFilter] = useState();
    const [data, setData] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const loadData = async () => {
            const res = await LoadSurah();
            setData(res);
        };
        loadData();
    });

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">
                    AlQuran Nakama
                </a>
            </div>
            <div className="flex-none gap-2">
                <Select
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor : 'white',
                            width : "350px",
                            borderColor: state.isFocused ? "grey" : "blue",
                        }),
                    }}
                    isSearchable
                    options={data}
                    onChange={(e) => {
                        navigate(`/${e.value}/ayahs`);
                    }}
                />
            </div>
        </div>
    );
}
