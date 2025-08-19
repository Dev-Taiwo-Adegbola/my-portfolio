import React from 'react'
import me from '../../assets/img/hero.webp'
import { PostHeader } from './postHeaders'
import { CommentIcon, EngagementIcon, LikeIcon, RetweetIcon } from '../Icons'


export const PostContent = ({content, img}) => {
    return (
      <div className="mt-0.5">
         <p className='text-[15px]'> {content}</p>
         <img src={img} alt="" className='w-[270px] h-auto mt-4 rounded-xl' />
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

export const Post = ({text, img}) => {
  return (
    <div className="flex gap-4 p-3  border-b border-white/20">
        <img src={me} alt="" className="size-[40px] rounded-full" />
        <div className="">
            <PostHeader />
            <PostContent content={text} img={img} />
            <PostEngagement />
        </div>
    </div>
  )
}
