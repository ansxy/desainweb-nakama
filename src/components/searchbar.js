import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import LoadSurah from ".././lib/loadsurah";
export default function SearchBar() {
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
        <>
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
        </>
    )
}