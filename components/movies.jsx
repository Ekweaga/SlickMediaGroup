import React from 'react'

function Movies({movie}) {
  return (
    <>
     <div className="w-[160px] h-[160px] m-3 inline-block relative p-2 lg:w-[280px] md:h-[160px] cursor-pointer">
                           
                           <img src={movie?.backdrop_path? `http://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`: "/Rectangle 5.png"} alt={movie?.title} className="w-full h-full block"/>
                           <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 hover:opacity-100 hover:bg-black flex items-center justify-center flex-col gap-3">
                              <p className='flex items-center justify-center text-white'>{movie?.title.slice(0,15)}..</p>
                             
                           </div>
                          
                          </div>
    </>
  )
}

export default Movies