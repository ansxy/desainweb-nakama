import axios from "axios";

export default async function LoadSurah(){
    try {
        const url = `${process.env.REACT_APP_API_URL}`
        const result = await axios.get(url)
        const temp = result.data.map((temp) => ({
            value : temp.number,
            label : temp.name
        }))
        return temp;     
      } catch (error) {
        console.log(error)
      }
}