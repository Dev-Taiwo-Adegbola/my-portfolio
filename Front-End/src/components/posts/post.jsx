import React, { useState } from 'react'
import me from '../../assets/img/hero.webp'
import { PostHeader } from './postHeaders'
import { CommentIcon, EngagementIcon, LikeIcon, RetweetIcon } from '../Icons'
import { ArrowLeft } from 'lucide-react'


export const ImageModal = ({img, onSetImgOpened}) => {
  
  return (
    <div className="fixed inset-0 md:left-[15%] lg:left-[25%] lg:w-[50%] md:w-[55%]  backdrop-blur-2xl grid place-items-center">
      <button onClick={()=>onSetImgOpened(false)} className="flex items-center py-2 px-4 absolute top-5 text-[#f7df1e] hover:bg-white/20 max-sm:bg-white/20 rounded-full transition-all"> <ArrowLeft size={30} /><span className="">go back</span></button>
      <img src={img} className=" w-[90%] md:mt-4 h-auto rounded-2xl" />
    </div>
  )}

export const PostContent = ({content, img, onSetImgOpened, onSetPostImg}) => {
  
    return (
      <div className="mt-0.5">
         <p className='text-[15px]'> {content}</p>
         <img onClick={()=>{onSetImgOpened(true); onSetPostImg(img)}} src={img} alt="" className='w-[270px] h-auto mt-4 rounded-xl' />
      </div>
    )
  }

  export const PostEngagement = ({content, img}) => {
    return (
      <div className="mt-4 flex h-[35px]  items-center justify-between pr-8">
         <button className="engageBtn hover:bg-blue-700/20 group"><CommentIcon className='fill-white/50 size-[20px] group-hover:fill-blue-700  engageicon'/></button>
         <button className="engageBtn hover:bg-green-600/20 group"><RetweetIcon className='fill-white/50 size-[20px] group-hover:fill-green-600 engageicon'/></button>
         <button className="engageBtn hover:bg-red-500/20 group"><LikeIcon className='fill-white/50 size-[20px] group-hover:fill-red-500 engageicon'/></button>
         <button className="engageBtn hover:bg-blue-700/20 group"><EngagementIcon className='fill-white/50 size-[20px] group-hover:fill-blue-700 engageicon'/></button>
      </div>
    )
  }

export const Post = ({text, img, imgOpened, setImgOpened, setPostImg}) => {
  // const [imgOpened, setImgOpened] =useState(false)
  return (
    <>
    <div className="flex gap-4 p-3  border-b border-white/20">
        <img src={me} alt="" className="size-[40px] rounded-full" />
        <div className="">
            <PostHeader />
            <PostContent content={text} img={img} onSetPostImg={setPostImg} imgOpened={imgOpened} onSetImgOpened={setImgOpened} />
            <PostEngagement />

        </div>
    </div>
    {/* {imgOpened && <ImageModal img={img} onSetImgOpened={setImgOpened} />} */}
    </>
  )
}
