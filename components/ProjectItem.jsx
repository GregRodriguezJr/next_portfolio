import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProjectItem = ({title, projectImg, projectPage}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2980b9] to-[#2c3e50]'>
        <Image className='rounded-xl group-hover:opacity-10' src={projectImg} alt='/'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2lx text-white tracking-wider text-center uppercase'>{title}</h3>
        <Link href={projectPage}>
            <p className='text-center m-5 p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              More Info
            </p>
        </Link>
        </div>
    </div>
  )
}

export default ProjectItem