import React from 'react'

function Search({loading,data,error}) {
  return (
  <>
{
   error !== null ? <div className='flex items-center justify-center'>{error}</div>:(<> <div>
    {
      loading ? <div className="flex items-center justify-center text-3xl font-bold">Loading.....</div> : <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px]'>{
        data.map((item)=>{
          return (<img src={item?.backdrop_path? `http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`: "/Rectangle 5.png"} alt={item?.title} className="w-full h-full block"/>)
        })} </div>
    }
  
    </div></>)
}
 
 
  </>
  )
}

export default Search
