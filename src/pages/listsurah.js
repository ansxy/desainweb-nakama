import { useLoaderData } from "react-router-dom";
import Hero from "../components/hero";
import CardList from "../components/card";
import RandomButton from "../components/randomsurah";

export default function ListSurah() {
  const state = useLoaderData();
  return (
    <>
      <section>
        <Hero/>
      </section>
      <section className=" bg-stone-400 grid grid-cols-3">
        <div className="col-span-3 p-6 flex justify-center">
          <h1 className=" font-medium text-4xl text-black">Daftar Surah</h1>
        </div>
        <CardList data={state}/>
      </section>
      <RandomButton/>
    </>
  );
}
