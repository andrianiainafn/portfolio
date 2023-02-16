import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experiences({}: Props) {
  const meta ={
    name: 'Meta',
    ens: 'meta.svg',
    role: 'Fullstack Dev',
    techno: ['physics.png','php.png','nodejs.svg']
  }
  const google ={
    name: 'Google',
    ens: 'google.svg',
    role: 'Data scientist',
    techno: ['python.svg','tensorflow.svg','js.png']
  }
  const apple = {
    name:'Apple',
    ens:'apple.svg',
    role:'Mobile Dev',
    techno: ['flutter.svg','physics.png']
  }
  
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen md:mt-0 mt-28 relative flex   flex-col  
    md:flex-row max-w-full px-10 justify-evenly 
    mx-auto items-center' >
        <h3 className='absolute top-24  uppercase tracking-[20px] text-[#d0aa5b] text-2xl' >Experiences</h3>
        <div className='w-full flex  space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1fa1b8]'>
            <ExperienceCard ens={meta} />
            <ExperienceCard ens={google}/>
            <ExperienceCard ens={apple} />
            <ExperienceCard ens={meta}/>
            <ExperienceCard ens={meta} />
            <ExperienceCard ens={meta}/>
        </div>
    </motion.div>
  )
}

export default Experiences