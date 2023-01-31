import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?:boolean
    tech:string
}

const Skill = ({tech,directionLeft}:Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{x: directionLeft ? -100 : 100,opacity:0}}
        transition={{duration: 1.2}}
        whileInView={{x:0,opacity:1}}
        viewport={{once: true}}
        className='rounded-full w-16 h-16
        object-cover  filter 
        group-hover:grayscale duration-300 ease-in-out'
    src={tech} alt='sary'/>
        <div className="absolute opacity-0 group-hover:opacity-80 
        transition duration-300 rounded-full z-0 group-hover:bg-[#1fa1b8] w-16 h-16  ">
            <div className="flex justify-center  items-center h-full">
                <p className='text-2xl font-bold  opacity-100 text-black'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill