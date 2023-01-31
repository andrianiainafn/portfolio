import React from 'react'
import { motion } from 'framer-motion' 


const ExperienceCard = ({ens}) => {
  return (
    <article className='flex flex-col rounded-lg items-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:[900px]
    snap-center bg-[#323232] mt-20 p-3 opacity-40 hover:opacity-100 
    transition-opacity duration-200 cursor-pointer overflow-hidden
    '>
        <motion.img
        initial={{
          y:-100,
          opacity:0
        }}
        transition={{
          duration:1.5
        }}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='w-24 h-24 rounded-full  xl:w-[150px] xl:h-[150px] object-cover object-center'
        src={ens.ens} alt='Experience' />
        <div className='px-0 md:px-10' >
          <h4 className='text-xl md:text-4xl font-light '> {ens.role}  </h4>
          <p className='font-bold text-lg md:text-xl mt-1'>{ens.name}</p>
          <div className="flex space-x-2 my-2">
            {
              ens.techno.map((techno,key)=>(
                <img key={key}
                className='h-10 w-10 rounded-full'
                src={techno} alt="techno" />
              ))
            }
          </div>
          <p >Jun 2022 - En cours</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </article>
  )
}

export default ExperienceCard