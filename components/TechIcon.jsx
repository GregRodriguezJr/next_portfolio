import Image from 'next/image';
import React from 'react'

const TechIcon = ({techName, techImgSrc}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image 
                    src={techImgSrc} 
                    height={65} 
                    width={65}
                    alt="various technology icons"
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>{techName}</h3>
            </div>
        </div>
    </div>
  )
}

export default TechIcon