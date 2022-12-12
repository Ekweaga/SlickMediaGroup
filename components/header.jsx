import React from 'react'

function Header() {
  return (
   <>

   <header className='text-white'>
    <div className="bg-[#292929] h-[50px] text-white p-3">
        <h3 className='border-[1px] border-white  w-[100px] p-[2px] ml-[30px]'>MyTestApp</h3>

    </div>
    <div className='bg-[url("/Rectangle 5.png")] h-[500px] w-[100%]' style={{background:'url("/Rectangle 5.png")'}}>

        <div className='bg-black/50 w-full h-full relative'>
        <div className='absolute top-[50%] left-[10%] md:left-[50px] md:top-[20%]'>
        <h1 className="md:text-5xl text-white text-center md:text-left md:w-[100px] md:leading-[70px] text-2xl">Watch something incredible</h1>
        </div>
        </div>

     
     

    </div>
   </header>
   </>
  )
}

export default Header