import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import dashboardImg from '../public/assets/dashboard.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase'>Projects</p>
          <h2 className='py-4'>What I've Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-black'>
              <Image className='rounded-xl group-hover:opacity-10' src={dashboardImg} alt='/'/>
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2lx text-white tracking-wider text-center uppercase'>Crypto Dashboard</h3>
                <Link href='/'>
                  <p className='text-center m-5 p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
                </Link>
                <Link href='/'>
                  <p className='text-center m-5 p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Source Code</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects