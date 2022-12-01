import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from 'axios';
import Dashboard from './components/dashboard';
import ListSurah from './components/listsurah';
import DetaiSurah from './components/detailsurah';
import DetailSurah from './components/detailsurah';
const router = createBrowserRouter([
  {
    path: "/",
    element : <Dashboard />,
    errorElement : <></>,
    children : [
      {
        element : <ListSurah />,
        path : "/",
        loader : async ({req,params}) => {
          try {
            const url = `${process.env.REACT_APP_API_URL}`
            const result = await axios.get(url)
            const newResult = result.data.map((data) => ({
              ...data, "newAudio" : new Audio(data.audio) , "play" : false 
            }))
            return newResult;
          
          } catch (error) {
            console.log(error)
          }
        },
        index: true
      },
      {
        path: "/:nomorsurah/ayahs",
        element : <DetailSurah/>,
        loader : async ({req,params}) => {
          try {
            const url = `${process.env.REACT_APP_API_URL}/${params.nomorsurah}`
            const result = await axios.get(url)
            const newResult = result.data.ayahs.map((data) => ({
              ...data,"alafasy" : new Audio(data.audio.alafasy) ,  "play" : false , "fullAudio" : new Audio(result.audio)
            }))
            console.log(newResult)
            return newResult
          } catch (error){
            console.log(error)
          }
        }
      },
      // {
      //   path : "/:nomorsurah/ayahs",
      //   element : <></>,
      //   loader : async ({req,params}) => {
      //     try {
      //       const url = `${process.env.REACT_APP_API_URL}/${params}/ayahs`
      //       const result = await axios.get(url)
      //       return result
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   }
      // },
      {
        path : "/:nomorsurah/ayahs/:nomorayahs",
        element : <></>,
        loader : async ({req,params}) => {
          try {
            const url = `${process.env.REACT_APP_API_URL}/${params.nomorsurah}/ayahs/${params.nomorayahs}`
            const result = await axios.get(url)
            return result
          } catch (error) {
            console.log(error)
          }
        }
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
