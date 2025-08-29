import React, { useState } from 'react'
import {HomeTabs, MobileBottomNavigations, MobileSideNavigations, MobileTopNavigations} from '../components/navigations/MobileNavigations'
import SideNavigations from '../components/navigations/SideNavigations'
import { ImageModal, Post } from '../components/posts/post'
import {SkillContent} from '../Data_Contents'
import {work_experience} from '../Data_Contents'
import me from '../assets/img/hero.webp'
import careerCraft from '../assets/img/projects/CareerCraft.webp'
import plotera from '../assets/img/projects/plotera-card.png'
import plotera0 from '../assets/img/projects/plotera.webp'
import ntech from '../assets/img/projects/Ntech.jpg'
import movieApp from '../assets/img/projects/movieApp.webp'
import ido from '../assets/img/projects/ido.webp'
import cv from '../assets/img/projects/cv.webp'
import { NodeJSicon, PythonIcon, ReactIcon, TailwindCSS } from '../components/Icons'
import { Link } from 'react-router'


const projectLinks ={
  plotera:'https://plotera.vercel.app/',
  cc:'https://career-craft-phi.vercel.app/',

}

export const SkillPost = () => {
  return (
    <ul className='list-disc flex flex-col gap-3 mt-4'>
      <h2 className='underline text-md font-bold text-blue-500'>Area of expertise</h2>
      <li>
        <span className='text-red-500 italic'>Full-Stack Development: </span>
        Proficient in both front-end and back-end technologies, ensuring seamless integration and functionality of web applications.
      </li>

      <li>
        <span className='text-green-500 italic'>Python Expertise: </span>
        Extensive experience with Python frameworks, enabling the development of high-performance applications.

      </li>

      <li>
        <span className='text-red-500 italic'>Front-End Technologies: </span>
        Skilled in HTML, CSS, JavaScript, and modern libraries like React.js, TailwindCSS, creating engaging and responsive user interfaces.

      </li>
      <li>
        <span className='text-amber-300 italic'>API Development: </span>
        Adept at designing and integrating RESTful APIs, facilitating smooth communication between diverse system components .

      </li>
      <li>
        <span className='text-blue-500 italic'>Database Management: </span>
          Competent in working with databases such as PostgreSQL and MongoDB, ensuring data integrity and optimal performance.
      </li>
      <div className='flex flex-wrap items-center gap-2 px-2  bg-amber-50/20 rounded-3xl h-[100px] w-fit'>
        <ReactIcon className={'fill-green-500 size-[60px]'}/>
        <NodeJSicon className={'fill-blue-500 size-[60px]'}/>
        <PythonIcon className={'fill-red-500 size-[60px]'}/>
        <TailwindCSS className={'fill-green-500 size-[60px]'}/>
      </div>
    </ul>
  )
}


export const AboutMe = () => {
  return (
    <p className="">
      <h2 className='underline mt-4 text-md font-bold text-blue-500'>About Me:</h2>
      {SkillContent.about_me}
      <button></button>
    </p>
  )
}

export const WorkPost = () => {
  return (
    <p className="">
      <h2 className='underline mt-4 text-md font-bold text-blue-500' contentEditable='true'>Plotera - Real Estate solution (Launching Soon)</h2>
      Started a role as a Developer at <a href='#' className='text-blue-500'>Plotera</a> leading the team in build the next big real estate solution. <a href='#' className='text-blue-500'>Plotera</a> is a Proptech startup   tackling real estate challenges in Africa by making property access safer, more transparent, 
      and affordable - starting with rent saving and verified listing.<br />
      <Link to={projectLinks.plotera} className='mt-2  inline-block px-4 py-2 rounded bg-amber-500'>Vist site</Link>
    </p>
  )
}

export const ProjectsPost = ({project, link, description }) => {
  return (
    <p className="">
      <h2 className='underline mt-4 text-md font-bold text-blue-500'>{project}</h2>
      {description}<br />
      <Link to={link} className='mt-2  inline-block px-4 py-2 rounded bg-blue-500'>View project</Link>
    </p>
  )
}

export const CV = () => {
  return (
    <p className="mt-5">
      
      <button className='mt-4 mx-1 text-md font-bold bg-green-500 inline-block px-4 py-2 rounded'>View Resume</button>
      <button className='mt-4 text-md font-bold bg-blue-500 inline-block px-4 py-2 rounded'>Download CV</button>
    </p>
  )
}

const Home = ({menuToggle, onSetMenuToggle, buttomMenuToggle}) => {


  const [homeTab, setHomeTab] = useState('for-you')
   const [imgOpened, setImgOpened] =useState(false)
   const [postImg, setPostImg ] = useState(null)

 

  return (
    <>
    <div className={`${buttomMenuToggle ==='home'?'translate-x-0' : '-translate-x-[120vw]'} absolute -z-1 md:top-0 md:left-[15%] lg:left-[25%] transition-all w-full lg:w-[50%] md:w-[55%]`}>
        <MobileTopNavigations menuToggle={menuToggle} onSetMenuToggle={onSetMenuToggle} midElement={<h2 className='font-bold text-xl'>Tae Portfolio</h2>}/>
            <HomeTabs homeTab={homeTab} onSetHomeTab={setHomeTab}/>
            
            {
              homeTab === 'for-you' 
              &&
              <>
              <Post text={<AboutMe />} img={me} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg} />
              <Post text={<SkillPost />} />
              </>
            }


            {
              homeTab === 'projects' 
              &&
              <>
              
              <Post text={<ProjectsPost description={work_experience.plotera} project='Plotera' link={projectLinks.plotera} />} img={plotera0} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              <Post text={<ProjectsPost description={work_experience.careerCraft} project='Career Craft.AI' link={projectLinks.cc} />} img={careerCraft} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              <Post text={<ProjectsPost description={work_experience.ido} project='iDO' link='' />} img={ido} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              <Post text={<ProjectsPost description={work_experience.movie} project='Tae MovieApp' link='' />} img={movieApp} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              </>
            }


            {
              homeTab === 'work-experiences' 
              &&
              <>
              <Post 
              text={<WorkPost />} 
              img={plotera}  imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              <Post text={work_experience.ntech} img={ntech} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              </>
            }

            {
              homeTab === 'view-resume' 
              &&
              <>
              <Post text={SkillContent.about_me} img={cv} imgOpened={imgOpened} setImgOpened={setImgOpened} setPostImg={setPostImg}/>
              <Post text={<CV />} img={''} />
              </>
            }

            </div>


            <MobileSideNavigations menuToggle={menuToggle} onSetMenuToggle={onSetMenuToggle}/>
{imgOpened && <ImageModal img={postImg} onSetImgOpened={setImgOpened} />}
    </>
  )
}

export default Home