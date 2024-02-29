import React, { useEffect } from 'react'

export const PageNotFound = () => {

  useEffect(()=>{
  document.title = `Page Not Found`;
  });

  return (
    <main>
      <section className='flex flex-col justify-center px-4'>
        <div className='flex flex-col items-center py-3 pt-20'>
          <p className='text-9xl max-sm:text-6xl text-blue-950 dark:text-white font-bold'>404, Oops!</p>
        </div>
        <div className='flex flex-col items-center pt-10'>
          <p className='text-6xl max-sm:text-4xl text-blue-950 dark:text-white font-bold'>Page Not Found</p>
        </div>
      </section>
    </main>
  )
}
