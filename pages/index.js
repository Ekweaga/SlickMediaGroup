import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Main from '../components/main'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { apikey } from '../components/url'
import Search from '../components/search'

export default function Home() {
  const [query ,setQuery] = useState("")
  const [querydata,setQueryData] = useState(false);
  const [loading,setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error,setError] = useState(null)

  const search = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${query}&page=1&include_adult=true`

  const searchQuery = async ()=>{
    if(query === "" || query === null){
      setQueryData(false)
    }
if(query.length > 1){
  setQueryData(true)

  setLoading(true)
  try{
    
    await axios.get(search).then((response)=>{
      setLoading(false)
      setData(response.data.results)
    
    })
  }
  catch(err){
    if (err.message === "Network Error"){
      setError("Check Connections")
    }
    else{
      setError('')
    }
  }
 
}



  }
 

 
  return (
    <>
    <Head>
      <title>
        Slick Media - Movie App
      </title>
    </Head>
    <Header/>

    <div className='mt-[50px] flex flex-col gap-[7px] w-[70%] mx-auto mb-[50px]'>
      <label>Search</label>
      <input type="text" placeholder="Search" className='border-[1px] border-[#BFBFBF] px-2 h-[40px] focus:outline-none ' value={query} onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQuery}/>
    </div>

    {querydata?<Search loading={loading} data={data} error={error}/>:
      <Main/>}

    </>
  )
}
