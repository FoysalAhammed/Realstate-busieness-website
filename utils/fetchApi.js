import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


  export const fetchApi = async (url)=>{
        const {data} = await axios.get((url),{
            headers: {
                'X-RapidAPI-Key': 'da239177c9msh70f16387d83213fp1ebc05jsn3c9434c4abf3',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }
            
        })
        return data;
  }