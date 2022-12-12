import React from 'react'

function Search({loading,data}) {
  return (
  <>
  {
    loading ? <div>Loading</div> : <div className='grid grid-cols-2 md:grid-cols-4'>{
      data.map((item)=>{
        return (<img src={item?.backdrop_path? `http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`: "/Rectangle 5.png"} alt={item?.title} className="w-full h-full block"/>)
      })} </div>
  }
  </>
  )
}

export default Search
