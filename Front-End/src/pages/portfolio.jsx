import React,  { useState } from 'react'
import { MobileBottomNavigations, MobileSideNavigations, MobileTopNavigations} from '../components/navigations/MobileNavigations'
import SideNavigations from '../components/navigations/SideNavigations'
import { Post } from '../components/posts/post'
import {SkillContent} from '../Data_Contents'
import me from '../assets/img/hero.webp'
import careerCraft from '../assets/img/projects/CareerCraft.webp'
import Home from './Home'
import SearchPage from './search'
import Messages from './messages'
import Port_insight from '../components/port_insighr'



const Portfolio = () => {

const [menuToggle, setMenuToggle] = useState(false)
const [buttomMenuToggle, setButtomMenuToggle] = useState("home")

const updateButtomMenu = (tab)  =>{
  setButtomMenuToggle(tab)
}

  return (
    <div>

      
        <>
        <SideNavigations />
        <Home buttomMenuToggle={buttomMenuToggle} menuToggle={menuToggle} onSetMenuToggle={setMenuToggle} />
        <SearchPage buttomMenuToggle={buttomMenuToggle} menuToggle={menuToggle} onSetMenuToggle={setMenuToggle} />
        <Messages buttomMenuToggle={buttomMenuToggle} menuToggle={menuToggle} onSetMenuToggle={setMenuToggle}  />
        <Port_insight />
        </>
      
        
        {!menuToggle && <MobileBottomNavigations onSetButtomMenuToggle={setButtomMenuToggle} buttomMenuToggle={buttomMenuToggle}/>}
        
    </div>
  )
}

export default Portfolio