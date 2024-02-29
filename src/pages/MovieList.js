import { useEffect } from 'react';
import { Card } from '../components/Card';
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({apiPath, title}) => {
const {data: movies} = useFetch(apiPath)

useEffect(()=>{
  document.title = `CinemaXXI - ${title}`;
  });

  return (
    <main className=' max-w-screen-2xl dark:bg-slate-950'>
      <section className='mx-auto py-7'>
        <div className='flex flex-wrap justify-center'>
        { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }  
        </div>
      </section>
    </main>
  );
};
