import React, { useContext } from 'react'
import YoutubeContext from '../../context/ContextCreate'

export default function Feed() {
    const {apiData} = useContext(YoutubeContext);

  return (
    <div className='flex flex-col'>
        <div className='relative h-48 md:h-52 md:rounded-xl overflow-hidden '>
            <img src={apiData.thumbnail} alt="" className='h-full w-full object-cover' />
        </div>
        <div className='flex mt-3'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
            <img src={apiData.avatar} alt="" className='h-full w-full object-cover' />
            </div>
            <div className='flex flex-col ml-3 overflow-hidden'>
                <span className='text-sm font-bold line-clamp-2'>{apiData.title} </span>
                <span className='text-[12px] font-semibold mt-1 text-gray-400 '>{apiData.author_title} </span>
                <div className='flex text-[12px] leading-none font-bold text-gray-400 truncate overflow-hidden '>
                    <span>{apiData.views}</span>
                    <span>{apiData.published} </span>
                </div>
            </div>

        </div>
    </div>
  )
}
