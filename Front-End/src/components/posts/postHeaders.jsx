import React from 'react'
import { VerifiedIcon } from '../Icons'

export const PostHeader = () => {
  return (
    <div className='text-white flex gap-2 items-center'>
       <span className='flex items-center gap-2'>Adegbola Taiwo <VerifiedIcon className='size-[20px] animation'/></span>
       <small>@Dev_Tae</small>
       <small>2d</small>

    </div>
  )
}
