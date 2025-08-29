import React, { useState } from 'react'
import me from '../assets/img/hero.webp'
import { AngleUpIcon, DateIcon, JobsIcon, Xicon, VerifiedIcon } from '../components/Icons'
import { Link, useNavigate } from 'react-router'
import { ArrowLeft, InstagramIcon, Linkedin, LucideFacebook } from 'lucide-react'
import { links } from '../components/port_insighr'
import coverImg from '../assets/img/cover-img.webp'


export const ProfileTabs = ({profileTab, onSetprofileTab}) => {
    return (
      <div className=' flex items-end w-full -translate-y-10 h-[50px] border-b border-white/10'>
          <ul className="flex justify-between  items-end w-full px-1 ">
            
                 <button onClick={()=>onSetprofileTab('certifications')} className={`text-sm p-1 ${profileTab === 'certifications' && 'border-b-2 border-blue-500 font-semibold'}`}>Certifications</button>
                 <button onClick={()=>onSetprofileTab('projects')} className={`text-sm p-1 ${profileTab === 'projects' && 'border-b-2 border-blue-500 font-semibold'}`}>Projects</button>
                 <button onClick={()=>onSetprofileTab('work-experiences')} className={`text-sm p-1 ${profileTab === 'work-experiences' && 'border-b-2 border-blue-500 font-semibold'}`}>Work experiences</button>
                 {/* <button onClick={()=>onSetprofileTab('view-resume')} className={`text-sm p-1 ${profileTab === 'view-resume' && 'border-b-2 border-blue-500 font-semibold'}`}>View Resume</button> */}
                 
                 
          </ul>
          </div>
    )
  }

  export const Certification = () => {
    return (
      
        <div className='text-2xl text-center animate-pulse'>Coming Soon</div>
      
    )
  }

  export const Project = () => {
    return (
      
        <div className='text-2xl text-center animate-pulse'>Coming Soon</div>
      
    )
  }

  export const Work = () => {
    return (
      
        <div className='text-2xl text-center animate-pulse'>Coming Soon</div>
      
    )
  }

const Profile = () => {

    const [isSocialOpen, setIsSocialOpen] = useState(false)
    const [profileTab, setprofileTab] = useState('certifications')
    const navigate = useNavigate()

  return (
    <div onClick={()=>setIsSocialOpen(false)} className='absolute -z-1 md:top-0 md:left-[15%] lg:left-[25%] transition-all w-full lg:w-[50%] md:w-[55%]'>
        <header className="bg-amber-600 h-[30vh] overflow-hidden ">
            <img src={coverImg} className="object-cover w-full -mt-3 " />
            <button className=" bg-blue-600 rounded-full p-1 absolute top-4 left-4 animate-pulse" onClick={()=>navigate(-1)}><ArrowLeft size={28} /></button>
        </header>

        <div className=" ">
            <div className=" pt-2 px-4 flex justify-between items-start   min-w-fit">
                <div className="  -translate-y-[52px] flex flex-col gap-y-3  items-start">
                    <img src={me} alt="" className='size-[90px] rounded-full' />
                    <div className='leading-4'>
                        <p className='font-bold text-xl flex items-center gap-2'>Adegbola Taiwo <VerifiedIcon className='size-[20px] animation' /></p>
                        <small>@Dev_Taiwo_Ade</small>
                    </div>
                    <p className="text-sm">A passionate FullStack developer || Python Enthusiast || skilled in modern Technologies such as ReactJS, TailWindCSS, Django || Learning NextJS, ReactNative and sharpening my skills in NodeJs</p>
                    <div className=" flex flex-col gap-2">
                        <span className="flex gap-2 items-center text-[13px] text-white/50">
                            <JobsIcon className='fill-white/50 size-[20px]' />
                            <span>Developer at <a href='https://plotera.vercel.app/' className='text-blue-500 hover:underline'>Plotera</a></span>
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
                <button onClick={(e)=>{e.stopPropagation(); setIsSocialOpen(!isSocialOpen)}} className={`${isSocialOpen ? 'bg-blue-600 text-white':"bg-white " } flex items-center text-sm  py-2.5 px-3 rounded-4xl text-black font-bold`}>social accounts &nbsp; 
                    <AngleUpIcon className={`${!isSocialOpen ? 'rotate-180 fill-black': 'rotate-0 fill-white' }   size-[17px] transition-all`}/></button>

                <ul className={`   px-5.5  mt-3 flex flex-col gap-2`}>
                    <li className="">
                        <Link to={links.x} className="flex gap-5 items-center text-blue-600"><Xicon className='fill-blue-600 size-[20px]' />TW</Link>
                    </li>
                    <li className="">
                        <Link to={links.insta} className="flex gap-5 items-center text-red-500"><InstagramIcon />IN</Link>
                    </li>
                    <li className="">
                        <Link to='/' className="flex gap-5 items-center text-green-500"><Linkedin />LD</Link>
                    </li>

                    <li className="">
                        <Link to={links.fb} className="flex gap-5 items-center text-blue-500"><LucideFacebook />FB</Link>
                    </li>

                    
                </ul>
                </div>
                
            </div>
        <ProfileTabs profileTab={profileTab} onSetprofileTab={setprofileTab}/>
        </div>
        <main className="">
            {
                          profileTab === 'certifications' 
                          &&
                          <Certification />
                        }
            
            
                        {
                          profileTab === 'projects' 
                          &&
                          <Project />
                        }
            
            
                        {
                          profileTab === 'work-experiences' 
                          &&
                          <Work />
                        }
            
                       
        </main>
    </div>
  )
}

export default Profile