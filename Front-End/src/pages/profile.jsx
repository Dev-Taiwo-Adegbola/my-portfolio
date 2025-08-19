import React, { useState } from 'react'
import me from '../assets/img/hero.webp'
import { AngleUpIcon, DateIcon, JobsIcon, Xicon, VerifiedIcon } from '../components/Icons'
import { Link } from 'react-router'
import { InstagramIcon, Linkedin, LucideFacebook } from 'lucide-react'

const Profile = () => {

    const [isSocialOpen, setIsSocialOpen] = useState(false)

  return (
    <div>
        <header className="bg-amber-600 h-[30vh]"></header>
        <div className=" ">
            <div className=" py-2 px-4 flex justify-between items-start border-b border-white/10  min-w-fit">
                <div className="  -translate-y-[52px] flex flex-col gap-y-3 items-start">
                    <img src={me} alt="" className='size-[90px] rounded-full' />
                    <div className='leading-4'>
                        <p className='font-bold text-xl flex items-center gap-2'>Adegbola Taiwo <VerifiedIcon className='size-[20px] animation' /></p>
                        <small>@Dev_Taiwo_Ade</small>
                    </div>
                    <p className="text-sm">A passionate FullStack developer || Python Enthusiast || skilled in modern Technologies such as ReactJS, TailWindCSS, Django || Learning NextJS, ReactNative and sharpening my skills in NodeJs</p>
                    <div className=" flex flex-col gap-2">
                        <span className="flex gap-2 items-center text-[13px] text-white/50">
                            <JobsIcon className='fill-white/50 size-[20px]' />
                            <span>Developer at <a href='' className='text-blue-500 hover:underline'>Plotera</a></span>
                        </span>

                        <span className="flex gap-2 items-center text-[13px] text-white/50">
                            <JobsIcon className='fill-white/50 size-[20px]' />
                            <span>Code instructor at N-TECH Training institute</span>
                        </span>

                        <span className="flex gap-2 items-center text-[13px] text-white/50">
                            <DateIcon className='fill-white/50 size-[20px]' />
                            <span>2 years+ experience</span>
                        </span>
                    </div>
                   
                    {/* <p c lassName="text-[14px]">29<small> Following</small>  11 <small>Followers</small></p> */}
                </div>
                <div className={`${isSocialOpen && 'h-[185px] bg-white rounded-t-3xl rounded-2xl border border-blue-600' } absolute right-3 border border-black h-[45px] overflow-y-hidden transition-all`}>
                <button onClick={()=>setIsSocialOpen(!isSocialOpen)} className={`${isSocialOpen ? 'bg-blue-600 text-white':"bg-white " } flex items-center text-sm  py-2.5 px-3 rounded-4xl text-black font-bold`}>social accounts &nbsp; 
                    <AngleUpIcon className={`${!isSocialOpen ? 'rotate-180 fill-black': 'rotate-0 fill-white' }   size-[17px] transition-all`}/></button>

                <ul className={`   px-5.5  mt-3 flex flex-col gap-2`}>
                    <li className="">
                        <Link to='/' className="flex gap-5 items-center text-blue-600"><Xicon className='fill-blue-600 size-[20px]' />TW</Link>
                    </li>
                    <li className="">
                        <Link to='/' className="flex gap-5 items-center text-red-500"><InstagramIcon />IN</Link>
                    </li>
                    <li className="">
                        <Link to='/' className="flex gap-5 items-center text-green-500"><Linkedin />LD</Link>
                    </li>

                    <li className="">
                        <Link to='/' className="flex gap-5 items-center text-blue-500"><LucideFacebook />FB</Link>
                    </li>

                    
                </ul>
                </div>
                
            </div>
        </div>
        <main className=""></main>
    </div>
  )
}

export default Profile