import React from 'react'
import {NavLink} from './NavLinks'
import { BookmarkIcon, CommunityIcon, GrokIcon, Home, JobsIcon, ListIcon, MessageIcon, MoreIcon, NewPostIcon, NotificationIcon, ProfileIcon, SearchIcon, SettingsIcon, SpaceIcon, VerifiedORGIcon, Xicon } from '../Icons'
import me from '../../assets/img/hero.webp'

const SideNavigations = () => {
  return (
    <div className='fixed hidden md:flex md:flex-col px-5 lg:pr-10 py-3.5 w-[15%] lg:w-[25%] h-[100vh] bg-black border-white/20 border-r '>
        <div className="flex lg:justify-between justify-center mt-2 mb-5 ">
            <div className="flex flex-col gap-3  items-center">
            <img src={me} alt="" className='size-[80px] lg:size-[100px] rounded-full' />
            <p className='lg:flex flex-col hidden '>
                <span>Adegbola Taiwo</span>
                <small>@Dev_Taiwo_Ade</small>
            </p>
            </div>
        </div>
        <div className=" ">
            <ul className="flex flex-col items-center lg:items-start gap-5.5 text-md font-semibold">
            {/* <Xicon className='fill-white size-[30px]'/> */}
            <NavLink to='/' icon={<ProfileIcon className='fill-white size-[30px]'/>} text='Profile'/>
            <NavLink to='/' icon={<ListIcon className='fill-white size-[30px]'/>} text='Blog' />
            <NavLink to='/' icon={<SpaceIcon className='fill-white size-[30px]'/>} text='Insights' />
            <NavLink to='/' icon={<JobsIcon className='fill-white size-[30px]'/>} text='My Journey' />
            <NavLink to='/' icon={<BookmarkIcon className='fill-white size-[30px]'/>} text='Extra' />
            <NavLink to='/' icon={<SettingsIcon className='fill-white size-[30px]'/>} text='Settings' /> 
            {/* <NavLink to='/' icon={<CommunityIcon className='fill-white size-[25px]'/>} text='Communities' />
            <NavLink to='/' icon={<Xicon className='fill-white size-[25px]'/>} text='Premium' />
            <NavLink to='/' icon={<VerifiedORGIcon className='fill-white size-[25px]'/>} text='Verified Orgs' />
            <NavLink to='/' icon={<ProfileIcon className='fill-white size-[25px]'/>} text='Profile' />
            */}
            <button className='flex gap-2 items-center justify-center size-[50px] p-3.5 lg:w-[80%] bg-white lg:p-2.5  rounded-full lg:rounded-4xl text-black'><NewPostIcon className='lg:hidden fill-black size-[30px]'/> <span className='max-lg:hidden '>post</span> </button>
            </ul>
        </div>
        
    </div>
  )
}

export default SideNavigations