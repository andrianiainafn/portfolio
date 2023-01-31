import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  const skills = [
    'physics.png','php.png','nodejs.svg','python.svg','tensorflow.svg','js.png'
    ,'flutter.svg','physics.png','vue.png','mongodb.svg','symfony.svg','tailwind.svg'
    ,'nextjs.svg','redux.svg','mysql.svg','html.png','css.svg','c2.svg','c.svg','c++.svg',
  ]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col 
    text-center md:text-left xl:flex-row max-w-[2000px] 
    min-h-screen xl:px-10 justify-center  xl:space-y-0 mx-auto items-center' >
        <h3 className='absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36  uppercase tracking-[2px] text-gray-500 text-sm'>Hover a skills for currency profiecency</h3>
        <div className="grid grid-cols-5 gap-5">
            
            {
              skills.map((skill,key)=>
                <Skill key={key} tech={skill}  />    
              )
            }
        </div>
    </motion.div>
  )
}

export default Skills