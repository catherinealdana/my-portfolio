import React from 'react'
// intro image
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function Intro() {
  return (
    <section className='bg-primary px-5 text-white py-32'>
        <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
            <div className='intro-info pb-5 md:pb-0'>
                <h1 className='test-4xl lg:text-6xl'>
                    Hi, <br />I'm <span className='text-accent'>Cathe</span>rine<br />
                    Front End Developer 
                </h1>
                <p className='py-5'>
                    I'm proficient in Javascript, React.js, Node.js and CSS
                </p>
                <div className='flex py-5'>
                   <a
                     href='https://www.linkedin.com/in/catherine-aldana/'
                     className='pr-4 inline-block text-accent hover:text-white'
                    >
                    {" "}
                    <AiOutlineLinkedin size={40} />{" "}
                    </a>
                    <a
                      href='https://github.com/catherinealdana'
                      className='pr-4 inline-block text-accent hover:text-white'
                    >
                    {" "}
                    <AiOutlineGithub size={40} />{" "}
                    </a> 
                </div>
              
                <a 
                 href="/#projects"
                 className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent'
                >
                 Projects
                </a>
              </div>

              <div className='hero-img'>
                <img
                 // src={image}
                  alt="desk_and_techskills"
                  className='lgw-[80] ml-auto'
                />

              </div>
        </div>
    </section>
  )
}
