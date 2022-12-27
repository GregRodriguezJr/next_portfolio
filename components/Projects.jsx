import React from 'react'
import dashboardImg from '../public/assets/dashboard.png'
import ProjectItem from './ProjectItem';
import noelImg from '../public/assets/noelImg.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-5'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#2980b9]'>Projects</p>
          <h2 className='py-4'>What I've Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title="Crypto Dashboard"
            projectImg={dashboardImg}
            projectPage='Dashboard'
          />
          <ProjectItem
            title="Noel Designs"
            projectImg={noelImg}
            projectPage='NoelDesigns'
          />
          </div>
        </div>
    </div>
  )
}

export default Projects