import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'

export const Search = ({apiPath, }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const {data: movies} = useFetch(apiPath, queryTerm)

  useEffect(()=>{
    document.title = `Search ${queryTerm}`;
    });

  return (
    <main className=' max-w-screen-2xl dark:bg-slate-950'>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No Result Found for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
      </section>
      <section className='mx-auto py-7'> 
        <div className='flex flex-wrap justify-center'>
        { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }  
        </div>
      </section>
    </main>
  )
}
