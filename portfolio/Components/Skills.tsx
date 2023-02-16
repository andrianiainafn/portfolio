import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  const skills = [
    {
      image: 'physics.png',
      direction: true,
      pourcentage: '98%'
    },{
      image: 'nodejs.svg',
      direction: true,
      pourcentage: '95%'
    },{
      image: 'python.svg',
      direction: true,
      pourcentage: '92%'
    },{
      image: 'php.png',
      direction: true,
      pourcentage: '78%'
    },{
      image: 'symfony.svg',
      direction: true,
      pourcentage: '68%'
    },{
      image: 'nextjs.svg',
      direction: false,
      pourcentage: '96%'
    },{
      image: 'redux.svg',
      direction: false,
      pourcentage: '93%'
    },{
      image: 'tailwind.svg',
      direction: false,
      pourcentage: '98%'
    },{
      image: 'mongodb.svg',
      direction: false,
      pourcentage: '98%'
    },{
      image: 'vue.png',
      direction: false,
      pourcentage: '91%'
    },{
      image: 'expressjs.svg',
      direction: true,
      pourcentage: '97%'
    },{
      image: 'flutter.svg',
      direction: true,
      pourcentage: '95%'
    },{
      image: 'tensorflow.svg',
      direction: true,
      pourcentage: '90%'
    },{
      image: 'js.png',
      direction: true,
      pourcentage: '99%'
    },{
      image: 'c++.svg',
      direction: true,
      pourcentage: '58%'
    }
    ,{
      image: 'c2.svg',
      direction: false,
      pourcentage: '88%'
    },{
      image: 'mysql.svg',
      direction: false,
      pourcentage: '98%'
    },{
      image: 'c.svg',
      direction: false,
      pourcentage: '48%'
    },{
      image: 'html.png',
      direction: false,
      pourcentage: '99%'
    },{
      image: 'css.svg',
      direction: false,
      pourcentage: '96%'
    }
  ]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col 
    text-center md:text-left xl:flex-row max-w-[2000px] 
    min-h-screen xl:px-10 justify-center  xl:space-y-0 mx-auto items-center' >
        <h3 className='absolute top-24  uppercase tracking-[20px] text-[#d0aa5b] text-2xl'>Skills</h3>
        <h3 className='absolute top-36  uppercase tracking-[2px] text-gray-500 text-sm'>Hover a skills for currency profiecency</h3>
        <div className="  skills grid grid-cols-5  gap-5   ">
            {
              skills.map((skill,key)=>
                <Skill key={key} tech={skill.image} taux={skill.pourcentage} directionLeft={skill.direction}  />    
              )
            }
        </div>
    </motion.div>
  )
}

export default Skills