import { useEffect, useState } from 'react'

export const useFetch = (apiPath, queryTerm="") => {
const [data, setData] = useState([]);
const url = `https://api.themoviedb.org/3/${apiPath}?api_key=3c2e88d662c005d0838192885b5c7fec&query=${queryTerm}&language=en-US&page=1`

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
