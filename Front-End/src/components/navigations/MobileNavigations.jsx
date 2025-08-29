import React from 'react'
import profile from '../../assets/avatar.svg'
import me from '../../assets/img/hero.webp'
import { ActiveHome, ActiveMessageIcon, AngleUpIcon, BookmarkIcon, ChatIcon, CommunityIcon, GrokIcon, Home, JobsIcon, ListIcon, MessageIcon, MonetizationIcon, MoonIcon, MoreIcon, NotificationIcon, ProfileIcon, QuestionIcon, SearchIcon, SettingsIcon, SpaceIcon, Xicon } from '../Icons'
import {Link} from 'react-router'
import { useState } from 'react'
import {MobileNavLink, NavLink} from './NavLinks'




export const MobileSideNavigations = ({menuToggle, onSetMenuToggle}) => {
    
    const [toggleSetting, setToggleSetting] = useState(false)

  return (
    <>
    <div on className={`${menuToggle ?'-translate-x-0' :'-translate-x-[120vw]'} fixed  top-0 bg-black transition-all flex flex-col   h-[100vh] px-5 pr-10 py-3.5  w-[80%] `}>
        <div className="flex justify-between items-start border-b border-white/10 pb-5 min-w-fit">
            <div className="flex flex-col gap-y-3 items-start">
                <img src={me} alt="" className='size-[80px] rounded-full' />
                <div className='leading-4'>
                    <p>Adegbola Taiwo</p>
                    <small>@Dev_Taiwo_Ade</small>
                </div>
                
            </div>
            
        </div>
    <div className="flex flex-col justify-between overflow-y-scroll no-scrollbar grow py-5">
    <div className="border-b border-white/10 pb-5">
            <ul className="flex flex-col gap-6">
               <MobileNavLink to='/profile' icon={<ProfileIcon className='fill-white size-[25px]'/>} text='Profile' />
               <MobileNavLink to='/' icon={<ListIcon className='fill-white size-[25px]'/>} text='Blog' />
                <MobileNavLink to='/' icon={<SpaceIcon className='fill-white size-[25px]'/>} text='Insights' />
               <MobileNavLink to='/' icon={<JobsIcon className='fill-white size-[25px]'/>} text='My Journey' />
               <MobileNavLink to='/' icon={<BookmarkIcon className='fill-white size-[25px]'/>} text='Extra' />
               {/* <MobileNavLink to='/' icon={<Xicon className='fill-white size-[25px]'/>} text='Premium' />
               <MobileNavLink to='/' icon={<ChatIcon className='fill-white size-[25px]'/>} text='Chat' />
               <MobileNavLink to='/' icon={<MonetizationIcon className='fill-white size-[25px]'/>} text='Monetization' /> */}
            </ul>
        </div>
        <div className={`transition-all  my-5 mb-25 min-h-[25px] overflow-hidden ${toggleSetting && 'min-h-[180px]'}`}>
            <div  onClick={()=> setToggleSetting(!toggleSetting)} className=" cursor-pointer flex justify-between items-center">
                <p>Settings & Support</p>
                <AngleUpIcon className={` transition-all size-[20px]  ${toggleSetting ?  'rotate-0 fill-blue-600 ' :'rotate-180 fill-white'}`} />
            </div>
            <div className=" mt-8 flex flex-col gap-y-5">
            <Link to='/' className="flex gap-5 items-center"><SettingsIcon className='fill-white size-[25px]'/>Settings and Privacy</Link>
            <Link to='/' className="flex gap-5 items-center"><QuestionIcon className='fill-white size-[25px]'/>Help center</Link>
            </div>
        </div>
            <div className="fixed bottom-0 left-0 right-[20%] bg-black/80 h-20 p-5 flex items-center ">
            <button>

            <MoonIcon className='fill-white size-[40px] p-2 rounded-full bg-black border border-white/10 -rotate-25'/>
            </button>
            </div>
          
    </div>
    </div>
    <div onClick={()=>onSetMenuToggle(false)} className={`${menuToggle ?'-translate-x-0' :'-translate-x-[120vw]'} transition-all fixed top-0 left-[80%] w-[20%]  h-[100vh] backdrop-blur`}></div>
    
    </>

  )
}



export const MobileBottomNavigations = ({onSetButtomMenuToggle, buttomMenuToggle}) => {
  return (
    <div className='fixed inset-x-0 md:left-[15%] lg:left-[25%] lg:w-[50%] md:w-[55%] bottom-0 h-[45px] flex items-center border-t border-white/10 bg-black '>
        <ul className="flex justify-between items-end w-full px-3">
            <button onClick={()=>onSetButtomMenuToggle('home')} className=''>{buttomMenuToggle === 'home' ? <ActiveHome className='fill-white size-[28px]' /> : <Home className='fill-white size-[28px]'/>}</button>
               <button onClick={()=>onSetButtomMenuToggle('search')} className=''><SearchIcon className={` ${buttomMenuToggle === 'search' &&"stroke-1.5 stroke-white"} fill-white size-[28px]`}/></button>
               
               <button onClick={()=>onSetButtomMenuToggle('message')} className=''>{buttomMenuToggle === 'message' ? <ActiveMessageIcon className='fill-white size-[28px]' /> : <MessageIcon className='fill-white size-[28px]'/>}</button>
            <button className=' bg-amber-400 py-2 animation-bg rounded px-6 flex flex-col items-center  text-[13px] font-bold'>Hire me</button>
               
        </ul>
    </div>
  )
}

export const MobileTopNavigations = ({onSetMenuToggle, menuToggle, midElement}) => {
    return (
      <div className='sticky  md:hidden bg-black inset-x-0 top-0 h-[70px] flex  items-center px-2  '>
          <ul className="flex justify-between items-center w-full px-3">
            <button onClick={()=>onSetMenuToggle(!menuToggle)} className=' flex items-center w-fit'>
              <img src={me} alt="me" className='border-2 border-black size-[35px] rounded-full' />
              <span className="flex relative -z-1 flex-col -translate-x-3.5 gap-1.5">
                <hr className='border flex w-[15px]' />
                <hr className='border flex w-[20px]' />
                <hr className='border flex w-[15px]' />
              </span>
            </button>
                 {midElement}
                 {
                  menuToggle === true 
                  ? 
                  <button onClick={()=>onSetMenuToggle(!menuToggle)} className='flex flex-row-reverse items-center w-fit'>
              <img src={me} alt="me" className='border-2 border-black size-[35px] rounded-full' />
              <span className="flex relative -z-1 flex-col translate-x-3.5 gap-1.5">
                <hr className='border flex w-[20px]' />
                <hr className='border flex w-[25px] -translate-x-3.5' />
                <hr className='border flex w-[20px]' />
              </span>
            </button>
                  : 
                  <button><SettingsIcon className='fill-white size-[28px]'/></button>
                 }
                 
          </ul>
      </div>
    )
  }

  
  
  export const HomeTabs = ({homeTab, onSetHomeTab}) => {
    return (
      <div className=' flex items-end w-full h-[50px] border-b border-white/10'>
          <ul className="flex justify-between  items-end w-full px-1">
            
                 <button onClick={()=>onSetHomeTab('for-you')} className={`text-sm p-1 ${homeTab === 'for-you' && 'border-b-2 border-blue-500 font-semibold'}`}>For you</button>
                 <button onClick={()=>onSetHomeTab('projects')} className={`text-sm p-1 ${homeTab === 'projects' && 'border-b-2 border-blue-500 font-semibold'}`}>Projects</button>
                 <button onClick={()=>onSetHomeTab('work-experiences')} className={`text-sm p-1 ${homeTab === 'work-experiences' && 'border-b-2 border-blue-500 font-semibold'}`}>Work experiences</button>
                 <button onClick={()=>onSetHomeTab('view-resume')} className={`text-sm p-1 ${homeTab === 'view-resume' && 'border-b-2 border-blue-500 font-semibold'}`}>View Resume</button>
                 
                 
          </ul>
          </div>
    )
  }
  

  