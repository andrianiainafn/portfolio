import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col flex-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items center
    '>
        <h3 className='absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        
        <div className="flex flex-col space-y-5 justify-center items-center mt-24">
            <h4 className='text-2xl font-semibold text-center' >
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </h4>
            <div className="space-y-4">
                <div className="flex items-start space-x-5">
                    <p>logo phone</p>
                    <p>+261344383115</p>
                </div>
                <div className="flex items-start space-x-5">
                    <p>logo phone</p>
                    <p>+261344383115</p>
                </div>
                <div className="flex items-start space-x-5">
                    <p>logo phone</p>
                    <p>+261344383115</p>
                </div>
            </div>
            <form className='flex flex-col space-y-2 w-fit mx-auto'  >
                <div className="flex space-x-2">
                    <input className='outline-none bg-slate-400/10 rounded-lg border-b px-6 py-4
        text-gray-400 placeholder-gray-500 border-[#242422] hover:border-[#1fa1b8] transition-all focus:border-[#1fa1b8]
        focus:text-[#1fa1b8]' type="text" name="" id="" />
                    <input className='outline-none bg-slate-400/10 rounded-lg border-b px-6 py-4
        text-gray-400 placeholder-gray-500 hover:border-[#1fa1b8] border-[#242422] transition-all focus:border-[#1fa1b8]
        focus:text-[#1fa1b8]' type="text" name="" id="" />
                </div>
                <textarea className='outline-none bg-slate-400/10 rounded-lg border-b px-6 py-4
        text-gray-400 placeholder-gray-500 border-[#242422]  transition-all focus:border-[#1fa1b8]
        focus:text-[#1fa1b8] hover:border-[#1fa1b8]' name="" id="" />
                <button className='bg-[#1fa1b8]/60 h-16 rounded-lg hover:animate-pulse'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact