import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  const project = [
    {
      image: 'etakalo.png',
      name: 'E-takalo',
      techno: ['mongodb.svg','expressjs.svg','physics.png', 'nodejs.svg']
    }
    ,{
      image: 'portfolio.png',
      name:'My Portfolio',
      techno: ['nextjs.svg','tailwind.svg']
    },{
      image:'mobile.png',
      name:'Etakalo Mobile',
      techno: ['flutter.svg','mysql.svg']
    },{
      image: 'thirteen.svg',
      name:'Agent AI',
      techno:['python.svg','tensorflow.svg']
    }]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='relative h-screen overflow-hidden flex 
    flex-col md:flex-row text-left md:text-center max-w-full
    justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24  uppercase tracking-[20px]
         text-[#d0aa5b] text-2xl'>Projects</h3>
        <div className="relaive w-full flex overflow-x-scroll
         overflow-y-hidden z-20 snap-x snap-mandatory
          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1fa1b8]">
            {
              project.map((pro,key,i)=>
                <div className="w-screen  flex-shrink-0 snap-center
                 flex flex-col  items-center justify-center
                   md:44 h-screen  " key={key}>
                  <motion.img 
                  className='w-[500px] h-[300px] mt-28 rounded-lg'
                  initial={{
                    y:-300,
                    opacity:0

                  }}
                  transition={{
                    duration: 1.2
                  }}
                  whileInView={
                    {
                      opacity: 1,
                      y:0
                    }
                  }
                  viewport={{once:true}}
                  src={pro.image} alt="text"
                  />  
                  <>  
                  <div className=" p-0  max-w-6xl flex-col space-y-4" >
                    <h4 className='text-2xl font-semibold mt-4'> {pro.name} {key + 1}/{project.length} </h4>
                    <span className='text-sm text-center md:text-left'>
                      Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Quidem similique quod consequatur ducimus?
                       Debitis aut sed dolore veniam placeat ut 
                    </span>
                    <div className="flex justify-center items-center space-x-4">
                      <p>Techno utiliser:</p>
                      <div className="flex justify-center items-center space-x-4">
                          {
                            pro.techno?.map((tech,key)=>
                               <img src={tech} key={key} alt="" className='w-11 h-11 animate-pulse' />
                              )
                          }
                      </div>
                    </div>
                    <div className='flex justify-center space-x-16 mt-10 items-center '>
                        <button className='border h-12 w-32 border-[#1fa1b8] rounded-full text-[#1fa1b8]' >View Source</button>
                        <button className='border h-12 w-32 border-[#1fa1b8] rounded-full text-[#1fa1b8]' >Demo</button>
                    </div>
                  </div>
                  </>
                </div>
              )
            }
        </div>
        <div className="w-full absolute top-[30%]
         bg-[#1fa1b8]/10 left-0 h-[400px] -skew-y-12 "/>
    </motion.div>
  )
}

export default Projects