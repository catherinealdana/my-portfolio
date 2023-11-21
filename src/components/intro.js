import React from 'react'
import catabackground from "../imgFolder/catabackground.jpg";
import profileintroimg from "../imgFolder/profileintroimg.png"
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import '../App.css';





export default function Intro() {
  const sectionStyle = {
    backgroundImage: `url(${catabackground})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 1.6
    
  };
  return (
    <section className='bg-primary custom-bg bg-opacity-50 px-5 text-white py-32'
         style= { sectionStyle} >
        <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
           
            <div className='intro-info pb-5 md:pb-0'>
            <h1 className='text-4xl lg:text-7xl introfont'>
                  Hi, <br />I'm <span className='text-accent'>Cathe</span>rine<br />
            </h1>
            <h5 className='text-4xl lg:text-4xl' > Dev • UX</h5>

                <p className='py-5 lg:text-3xl'>
                   Javascript, React.js, Node.js and CSS and always open for more new data in my brain 🧠
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
                 href="/#projects">
                < button type="button" class="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Projects</button>

                </a>
              </div>

              <div className='intro-img'>
                <img
                  src={profileintroimg}
                  alt="desk_and_techskills"
                  className='lgw-[70] ml-auto'
                  style={{ opacity: 0.6 }} 
                />

              </div>
        </div>
    </section>
  )
}
