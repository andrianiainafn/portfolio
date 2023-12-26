import About from '@/Components/About'
import Contact from '@/Components/Contact'
import Experiences from '@/Components/Experiences'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import Head from 'next/head'
import { useEffect,useRef, useState } from 'react'

export default function Home() {
  // let spies: Array<HTMLElement> = []
  const [spies,setSpies] = useSatate<Array<HTMLElement>>([])
  const ref = useRef(null)
  const [valueOfScroll, setValueOfScroll] = useState(true)
  const ratio = .6
  let observer: IntersectionObserver | null = null
  const active = (elem:any)=>{
    const id = elem.getAttribute('id')
    console.log(id)
    const anchor = document.querySelector(`a[href="#${id}"]`)
    console.log(anchor)
    if(anchor === null){
      return
    }
    anchor.parentElement!
    .querySelectorAll('.active')
    .forEach(node=>{
      node.classList.remove('active')
      node.classList.add('link')
    })
    
    anchor.classList.add('active')
    anchor.classList.remove('link')
  }
  
  const callback = (entries:Array<IntersectionObserverEntry>,observer:IntersectionObserver)=>{
     entries.forEach(entry=>{
       if(entry.intersectionRatio > 0){
        active(entry.target)
       }
     })
  }
  const observe = (elems: Array<HTMLElement>)=>{
    if(observer !== null){
      elems.forEach(elem=> observer!.unobserve(elem))
    }
    const y = Math.round(window.innerHeight * ratio)
    observer = new IntersectionObserver(callback,{
      rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    for(let i=0;i<elems.length;i++){
      observer.observe(elems[i])
    }
  }

  useEffect(()=>{
    if(ref.current){
      setSpies(Array.from(ref.current!.querySelectorAll('[data-spy]')))
    }
    if(spies.length > 0){
      observe(spies)
      window.addEventListener('resize',()=>{
        observe(spies)
      })
    }
  },[valueOfScroll])
  const HandleScroll = ()=>{
    console.log(valueOfScroll)
    setValueOfScroll(ancien=>!ancien)
  }
  return (
    <>
      <div ref={ref} onScroll={HandleScroll} className='bg-[#303736] h-screen text-white
       scroll-smooth overflow-y-scroll overflow-x-hidden  snap-y snap-mandatory z-0 scrollbar
       scrollbar-track-gray-400/20 scrollbar-thumb-[#1fa1b8]'>
        <Head>
          <title>Nomena's portfolio</title>
        </Head>
        <Header/>
        <section id='hero' className='snap-start'>
          <Hero/>
        </section> 
          <div id='about' className='snap-center'  data-spy>
              <About/>
          </div>
          <div id='experiences' className='snap-center' data-spy>
            <Experiences/>
          </div>
          <div id='skills' className='snap-start'   data-spy>
            <Skills/>
          </div>
          <div id='projects' className='snap-start'  data-spy >
            <Projects/>
          </div>
          <div id='contact' className='snap-start '  data-spy >
            <Contact/>
          </div>           
      </div>  
    </>
  )
}
