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
         <Link to={{to}} className="flex gap-5 items-center text-sm">{icon} <span className='hidden lg:block'>{text}</span></Link>
         
    </li>
    )
}
