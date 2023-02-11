import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  const HandleClickMenu = () =>{
    const premier = document.querySelector('#premier')
    const deuxieme = document.querySelector('#deuxieme')
    const troisieme = document.querySelector('#troisieme')
    if(premier?.classList.contains('premier')){
        premier?.classList.remove('premier')
    }else{
        premier?.classList.add('premier')
    }
    if(deuxieme?.classList.contains('deuxieme')){
        deuxieme?.classList.remove('deuxieme')
    }else{
        deuxieme?.classList.add('deuxieme')
    }if(troisieme?.classList.contains('troisieme')){
        troisieme?.classList.remove('troisieme')
    }else{
        troisieme?.classList.add('troisieme')
    }
  }
  return ( 
     <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div 
            initial={
                {
                    x: -500,
                    opacity:0,
                    scale:0.5
                }
            }
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center justify-between  '>
                <div className='mr-3'  >
                    <SocialIcon  style={{ height: 35, width: 35 }} url="https://twitter.com/nomena" 
                    bgColor='gray'
                    />
                </div>  
                <div className='mr-3'>
                    <SocialIcon style={{ height: 35, width: 35 }} url="https://facebook.com/nomena" 
                    bgColor='gray'
                    />
                </div>
                <div className='mr-3'>
                    <SocialIcon style={{ height: 35, width: 35 }} url="https://instagram.com/nomena" 
                    bgColor='gray'
                    
                    />
                </div>
                <div className='mr-3'  >
                    <SocialIcon  style={{ height: 35, width: 35 }} url="https://github.com/nomena" 
                    bgColor='gray'
                    />
                </div>
                <div className='mr-3'  >
                    <SocialIcon  style={{ height: 35, width: 35 }} url="https://linkedin.com/nomena" 
                    bgColor='gray'
                    />
                </div>
            </motion.div>

            <motion.div 
            initial={
                {
                    y: -500,
                    opacity:0,
                    scale:0.5
                }
            }
            animate={{
                y:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5
            }}
            className='md:flex hidden justify-between items-center  text-gray-400 tracking-[4px] '>
                        <a href='#about' className='text-base link mr-3 uppercase  md:hover:text-[#1fa1b8]' >
                            About
                        </a>
                        <a href="#experiences" className='text-base link mr-3 uppercase md:hover:text-[#1fa1b8] ' >
                           Experiences
                        </a>
                        <a href='#skills' className='text-base link mr-3 uppercase  md:hover:text-[#1fa1b8]' >
                            Skills
                        </a>
                        <a href='#projects' className='text-base link mr-3 uppercase  md:hover:text-[#1fa1b8]'>
                            Projects
                        </a>
                        <a href='#contact' className='text-base link mr-3 uppercase  md:hover:text-[#1fa1b8] '>
                            Contact
                        </a>
            </motion.div>
            <motion.div
            initial={
                {
                    y: -500,
                    opacity:0,
                    scale:0.5
                }
            }
            animate={{
                y:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5
            }}
            className="xl:hidden md:hidden cursor-pointer "
            >
                <div className="menuBurger" onClick={HandleClickMenu} >
                    <div className="menuChild" id='premier'></div>
                    <div className="menuChild" id='deuxieme'></div>
                    <div className="menuChild" id='troisieme'></div>
                </div>
            </motion.div>
            <motion.div 
            initial={
                {
                    x: 500,
                    opacity:0,
                    scale:0.5
                }
            }
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <div className='mr-3'>
                    <SocialIcon style={{ height: 35, width: 35 }} url="https://email.com/nomena" 
                    bgColor='gray'
                    />
                </div>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </motion.div>
     </header> 
    )
}

export default Header