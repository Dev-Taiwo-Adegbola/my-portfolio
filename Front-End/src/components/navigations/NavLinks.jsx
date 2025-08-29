import {Link} from 'react-router'


export const MobileNavLink = ({to, text, icon}) => {
    
  return (
    <li className="">
         <Link to={to} className="flex gap-5 items-center">{icon} {text}</Link>
         
    </li>
    )
}

export const NavLink = ({to, text, icon}) => {
    
  return (
    <li className="">
         <Link to={to} className=" flex px-2 py-2 lg:px-4 lg:py-1.5 gap-5 items-center text-sm hover:bg-white/20 hover:rounded-full lg:hover:rounded-3xl transition-all">{icon} <span className='hidden lg:block '>{text}</span></Link>
         
    </li>
    )
}
