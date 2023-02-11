import { easeIn, easeInOut, motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?:boolean
    tech:string,
    taux:string
}

const Skill = ({taux,tech,directionLeft}:Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{x: directionLeft ? -100 : 100,opacity:0}}
        transition={{duration: 1 ,easeInOut}}
        whileInView={{x:0,opacity:1}}
        viewport={{once: true}}
        className='rounded-full md:w-16 md:h-16 sm:w-16 sm:h-16 w-11 h-11
        object-cover  filter 
        group-hover:grayscale duration-300 ease-in-out'
    src={tech} alt='sary'/>
        <div className="absolute opacity-0 group-hover:opacity-80 
        transition duration-300 rounded-full z-0 group-hover:bg-[#1fa1b8] md:w-16 md:h-16 w-11 h-11  ">
            <div className="flex justify-center  items-center h-full">
                <p className='text-2xl font-bold  opacity-100 text-black'>{taux}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill