import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
    transition={{
      duration: 1.5
    }}
    initial={{
      x:-200,
      opacity: 0
    }}
    whileInView={{
      x:0,
      opacity: 1
    }}
    viewport={{once:true}}
    className='flex flex-col aboutrow xl:w-[80%]  relative h-screen text-center md:text-left
    md:flex-row xl:flex-row xl:pt-28 max-w-7xl px-10 justify-evenly mx-auto items-center
    '
    >
      <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl' >About</h3>
      <motion.img 
        transition={{
          duration: 1.5
        }}
        initial={{
          x:-200,
          opacity: 0
        }}
        whileInView={{
          x:0,
          opacity: 1
        }}
        viewport={{once:true}}
       src="profile.jpg"  alt="zay"
       className=' responsive -mb-32 mt-48 sm:mt-24  md:mt-0 md:mb-0 flex-shrink-0 w-64 h-64 object-cover rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
       />
       <div className='space-y-10 px-0  md:px-10 mt-36 sm:mt-24  md:mt-0'>
         <h4 className='text-base  md:text-3xl font-semibold'>Me connaitre</h4>
         <span className='md:text-xs xl:text-base text-xs m-0' style={{margin:'0 !important'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos totam 
            voluptate magni quisquam, ratione libero illum praesentium qui fugiat numquam,
            illo sed officiis quam nisi error consectetur aliquam voluptatum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores omnis 
            vel, quo nisi velit possimus eius suscipit repudiandae 
            at enim ea sapiente cum, minima facere atque, dicta repellat est.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Excepturi doloremque quo vel repudiandae animi. Rem, corporis. A facere
             laboriosam perferendis sed voluptatem dolorum quia nemo, quo soluta nam placeat corporis.
         </span>
       </div>

    </motion.div>
  )
}

export default About
