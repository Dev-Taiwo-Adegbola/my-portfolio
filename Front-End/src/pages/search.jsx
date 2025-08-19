import React from 'react'
import { MobileTopNavigations } from '../components/navigations/MobileNavigations'



export const InputBox = () => {
  return (
    <input type='search'placeholder='Search my portfolio' className='w-[70%] border border-white/5 outline-0 text-blue-500 placeholder:text-white/50 bg-white/10 px-2 py-2 rounded-3xl'/>
  )
}

export const CommingSoon = () => {
    return (
        <div className='text-2xl text-center animate-pulse'>Search Functionality Coming Soon</div>
    )
  }


const SearchPage = ({menuToggle, onSetMenuToggle, buttomMenuToggle}) => {
return(
    <div className={`${buttomMenuToggle ==='search'?'translate-x-0' : '-translate-x-[120vw]'}  absolute  -z-1   md:top-0 md:left-[15%] lg:left-[25%] transition-all w-full lg:w-[50%] md:w-[55%]`}>
        <MobileTopNavigations menuToggle={menuToggle} onSetMenuToggle={onSetMenuToggle} midElement={<InputBox />}/>
        <div className="hidden md:flex min-w-full  flex-col md:pt-5 items-center "><InputBox /></div>
        <div className='mt-50'>

        <CommingSoon />
        </div>

    </div>
)
}

export default SearchPage