import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundSquare from './BackgroundSquare'
import Image from 'next/image'
import pic from '../public/about.jpg'
type Props = {}

const Hero = (props: Props) => {
  const [text,count] = useTypewriter({
    words:["Hi,I'm Nomena Andrianiaina",
        "Coding is my passion ,just like soccer is my favorite sport",
        "I could code forever,it's my happy place"
        ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed:30    
  })  
  return (
    <div className='h-screen flex flex-col xl:pt-20  space-y-3 items-center justify-center text-center overflow-hidden'>
        <BackgroundSquare/>
        <Image className=' rounded-lg h-[200px] w-[200px]'
        src={pic} alt="Nomena" />
        <div>
            <h2 className='text-sm uppercase font-semibold text-[#1fa1b8] pb-2 tracking-[8px]' >#Software Engennering Student</h2>
            <h1>
                <span className=' mr-3 text-gray-300  scroll-px-10' >{text}</span>
                <Cursor cursorColor='#1fa1b8'/>
            </h1>
        </div>  
    </div>
  )
}

export default Hero