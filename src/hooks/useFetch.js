import { useEffect, useState } from 'react'

export const useFetch = (apiPath, queryTerm="") => {
const [data, setData] = useState([]);
const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.API_KEY}&query=${queryTerm}&language=en-US&page=1`
console.log(url);
useEffect(()=> {
    async function fetchMovies(){
      const responds = await fetch(url);
      const json = await responds.json();
      setData(json.results);
    } 
    fetchMovies();
  },[url])

  return { data }
}
