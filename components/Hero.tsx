import React, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
  const [text,setText] = useTypewriter({
    words: ["Hi, i'm Chiboka Emmanuel Chinemezu",'a FrontEnd Web Developer', 'and a Web Designer'],
    loop: true,
    delaySpeed:2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center, text-center overflow-hidden'>
      <BackgroundCircles/>
      <img className='relative rounded-full h-32 w-32  mx-auto object-center object-cover' src="./images/xavy.jpg" alt="" />
      <h1>
      <span className="text-xl"> {text}</span>
      <Cursor cursorColor='white'/>
      </h1>
      
      

    </div>
  )
}

export default Hero
