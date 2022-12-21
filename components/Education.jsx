import React from 'react'

const Training = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p>Education</p>
            <h2>Codeup</h2>
            <p>Jul 2020 - Jan 2023</p>
            <p>
                A Fully immersive, project-based, and intensive 20-week program that provides individuals with 670 hours of expert instruction and mentorship in software development.
            </p>
          </div>
          <div>
            <img src="assets/CodeupLogo.png" alt="codeup logo" />
          </div>
        </div>
    </div>
  )
}

export default Training