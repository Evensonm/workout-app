import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col 
    gap-10 items-center justify-centers text-center 
    max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text:7xl text-blue-400'>GENERATE YOUR WORKOUT</h1>
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text:7xl'>Swole
        <span className='text-blue-400'>normous</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowldge that I may become <span className='text-blue-400 font-medium'>unbelieveably swolenormous </span>
        and accepts all risks of local <span className='text-blue-400 font-medium'>mass monstrosity</span> that may make me
        unable to fit through doors</p>
      <Button func={()=> {
        window.location.href = '#generate'
      }} text={'Accept and Begin'}></Button>
    </div>
  )
}
