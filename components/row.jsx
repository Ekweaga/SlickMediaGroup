
import React,{useEffect,useState} from 'react'
import Movies from './movies'
import {MdChevronLeft} from "react-icons/md"
import {MdChevronRight} from "react-icons/md"
import axios from "axios"

function Row({title,id,url}) {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null)

    const goRight = ()=>{
        const slider = document.getElementById("slider" + id)
        slider.scrollLeft = slider.scrollLeft + 100 
    }
    const goLeft = ()=>{
        const slider = document.getElementById("slider" +id)
        slider.scrollLeft = slider.scrollLeft - 100 
    }

    const moviedata = async()=>{
        try {
           await  axios.get(url).then((response)=>{
                   
                setMovies(response.data.results)
            })
        }
        catch(err){
            console.log(err)
            if(err.message === "Network Error"){
                setError("Check connections")
            
            }
            else{
                setError('')
            }
        }

    }

    useEffect(()=>{
            moviedata();
        

    },[url])
    
  return (
   <>
   {
    error !== null ? <div className='flex items-center justify-center'>{error}</div>: (<><div className='text-black'>
    <h2 className="p-3 mx-2 font-bold">{title}</h2>
    <div className='relative w-full mx-auto flex items-center group'>
    <div> <MdChevronLeft size={40} className='cursor-pointer bg-white text-black rounded-full hidden group-hover:block opacity-40 hover:opacity-80' onClick={goLeft}/> </div>
       <div className="slider overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide" id={`slider` + id}>
           {
               movies.map((movie)=>{
                   return (
                     <Movies movie={movie} key={movie?.id} />
                   )
               })
           }
       </div>
       <div> <MdChevronRight size={40} className='cursor-pointer bg-white rounded-full text-black hidden group-hover:block opacity-40 hover:opacity-80' onClick={goRight}/></div>
      
    
    </div>
    
    </div></>)
   }


   </>
  )
}

export default Row
