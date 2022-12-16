import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import ModalTafsir from "../components/modaltafsir";
export default function Audio(state) {

//   const [item, setItem] = useState([]);
//   const getItem = JSON.parse(localStorage.getItem(window.location.href) || '0')


//   useEffect(() => {
//     if (getItem !== 0) {
//       setItem([...getItem])
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(window.location.href, JSON.stringify(item))
//   }, [item])

//   const handlePlay = (index) => {
//     if (item.includes(index)) {
//       ;
//     } else {
//       setItem((prev) => ([...prev, index]))
//     }
//     state.map((arr, i) => {
//       if (i === index) {
//         arr.alafasy.play();
//         return { ...arr, play: true };
//       }
//       arr.alafasy.pause();
//       return { ...arr, play: false };
//     });
//   };

//   const handlePause = (index) => {
//     state.map((arr, i) => {
//       if (i === index) {
//         arr.alafasy.pause();
//         return { ...arr, play: false };
//       }
//       return { ...arr, play: false };
//     });
//   };
}