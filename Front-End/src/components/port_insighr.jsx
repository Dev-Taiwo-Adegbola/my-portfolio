import React from 'react'
import { DjangoIcon, Htmlicon, JSIcon, NextJSicon, NodeJSicon, PythonIcon, ReactIcon, TailwindCSS, Xicon } from './Icons'
import { Github, InstagramIcon, Linkedin, LucideFacebook } from 'lucide-react'
import { Link } from 'react-router'

export const links = {
  fb:'https://www.facebook.com/dev.taiwoadegbola',
  x:'https://x.com/Dev_Taiwo_Ade',
  gh:'https://github.com/Dev-Taiwo-Adegbola',
  insta:'https://www.instagram.com/dev_taiwo_ae/'
}
const SocialHandles = () => {
  return (
    <div className='flex flex-col items-center py-2 border border-white/60 w-[80%] h-[120px] rounded-2xl'>
      <h2 className=''>Social handles</h2>
      <div className=''>
        <ul className={`   px-5.5  mt-3 flex  gap-2`}>
          <li className="">
          <Link to={links.x} className="flex flex-col gap-3 items-center text-blue-600 animate-pulse"><Xicon className='fill-blue-600 size-[20px]' />TW</Link>
          </li>
          <li className="">
          <Link to={links.insta} className="flex flex-col gap-2 items-center text-red-500 animate-pulse"><InstagramIcon />IN</Link>
          </li>
          <li className="">
          <Link to='/' className="flex flex-col gap-2 items-center text-green-500 animate-pulse"><Linkedin />LD</Link>
          </li>

          <li className="">
          <Link to={links.fb} className="flex flex-col gap-2 items-center text-blue-500 animate-pulse"><LucideFacebook />FB</Link>
          </li>
          <li className="">
          <Link to={links.gh} className="flex flex-col gap-2 items-center text-blue-500 animate-pulse"><Github />GH</Link>
          </li>
        
                            
        </ul>
      </div>
    </div>
  )
}

const MySkills = () => {
  return (
    <div className='flex flex-col items-start py-2 border border-white/60 w-[80%] h-fit rounded-2xl'>
      <h2 className='text-lg ml-5'>My skills</h2>
      <div className=''>
        <ul className={`   px-5.5  mt-3 flex flex-col  gap-2 text-sm`}>
          <li className="flex  gap-2 items-center text-[#f7df1e] animate-pulse"><Htmlicon  className=' size-[20px]'/>HTML, CSS
          </li>
          <li className="flex  gap-2 items-center text-[#f7df1e] animate-pulse"><JSIcon className=' size-[20px]' />JavaScript
          </li>
          <li className="flex  gap-3 items-center text-blue-600 animate-pulse">
          <ReactIcon className='fill-blue-600 size-[20px]' />
          React
          </li>
          <li className="flex  gap-2 items-center text-blue-500 animate-pulse"><TailwindCSS className='fill-blue-600 size-[20px]' />TailWindCSS
          </li>
          <li className="flex  gap-2 items-center text-blue-600 animate-pulse"><PythonIcon className='fill-blue-600 size-[20px]' />Python
          </li>

          <li className="flex  gap-2 items-center text-green-600 animate-pulse"><DjangoIcon className='fill-green-600 size-[20px]' />Django
          </li>

          <li className="flex  gap-2 items-center text-green-600 animate-pulse"><NodeJSicon className='fill-green-600 size-[20px]' />NodeJS [learning]
          </li>
        
          <li className="flex  gap-2 items-center text-green-600 animate-pulse"><NextJSicon className='fill-green-600 size-[20px]' />NextJS [learning]
          </li>

          <li className="flex  gap-2 items-center text-blue-600 animate-pulse"><ReactIcon className='fill-blue-600 size-[20px]' />ReactNative [learning]
          </li>
                            
        </ul>
      </div>
    </div>
  )
}


const Port_insight = () => {
  return (
    <div className='fixed hidden md:flex top-0 md:left-[70%] lg:left-[75%] md:w-[30%] lg:w-[25%] h-[100vh] border-l border-white/20 flex-col items-center gap-8 pt-5'>
      <MySkills />
      <SocialHandles />
    </div>
  )
}

export default Port_insight