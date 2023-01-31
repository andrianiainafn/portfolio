import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundSquare = (props: Props) => {
  return (
    <motion.div
        initial={
            {
                opacity:0,
            }
        }
        animate={{
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            scale:[1,2,3,1]
        }}
        transition={{
            duration: 2.5
        }}
     className='relative flex justify-center items-center'

     >
        <div className='  absolute border  border-[#1fa1b8] h-[500px] w-[500px] mt-72 rounded-lg  animate-pulse'/>
        <motion.div 
         className='  absolute border  border-[#1fa1b8] h-[600px] w-[600px] mt-72 rounded-lg  animate-pulse'
         initial={
            {
                opacity:0,
            }
        }
        animate={{
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0,0],
        }}
        transition={{
            duration: 2.5
        }}
         />
                 <motion.div 
         className='  absolute border  border-[#1fa1b8] h-[550px] w-[550px] mt-72 rounded-lg  animate-pulse'
         initial={
            {
                opacity:0,
            }
        }
        animate={{
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0,0],
        }}
        transition={{
            duration: 2.5
        }}
         />
                 <motion.div 
         className='  absolute border  border-[#1fa1b8] h-[520px] w-[520px] mt-72 rounded-lg  animate-pulse'
         initial={
            {
                opacity:0,
            }
        }
        animate={{
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0,0],
        }}
        transition={{
            duration: 2.5
        }}
         />
    </motion.div>
  )
}

export default BackgroundSquare