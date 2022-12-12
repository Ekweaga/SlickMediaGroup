import React,{useState,useEffect} from 'react'
import Row from './row'
import { requests } from './url'


function Main() {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <>
    {
      loading ? <div className='flex text-3xl items-center justify-center font-bold'>Loading.....</div>:( <> <Row title='Upcoming' id="1" url={requests.upcoming}/>
      <Row title="Top-rated" id="2" url={requests.toprated}/>
      <Row title='Trending' id="3" url={requests.trending}/>
      <Row title="Night movies" id="4" url={requests.horror}/>
      <Row title="Vampire" id="5" url={requests.Nightmovies}/></>)
    }
   
   
   
   
    </>
  )
}

export default Main