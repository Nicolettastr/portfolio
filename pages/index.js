'use client'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Banner from '../components/banner'
import Contact from '../components/contact'
import HomeProjects from '../components/homeProjects'
import { useEffect, useRef } from 'react'
import webImage from '../public/web.png'
import canva from '../public/skills/canva.svg'
import css from '../public/skills/css.svg'
import figma from '../public/skills/figma.svg'
import flask from '../public/skills/flask.svg'
import git from '../public/skills/git.svg'
import github from '../public/skills/github.svg'
import gpt from '../public/skills/chatgpt.svg'
import html from '../public/skills/html.svg'
import javascript from '../public/skills/javascript.svg'
import nextjs from '../public/skills/nextjs.svg'
import postman from '../public/skills/postman.svg'
import python from '../public/skills/python.svg'
import react from '../public/skills/react.svg'
import redux from '../public/skills/redux.svg'
import slack from '../public/skills/slack.svg'
import sql from '../public/skills/sql.svg'
import trello from '../public/skills/trello.svg'
import vercel from '../public/skills/vercel.svg'
import blender from '../public/skills/blender.svg'
import threejs from '../public/skills/threejs.svg'
import gsapLogo from '../public/skills/gsap.svg'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const bgRefElement = bgRef.current;

  const languages = [
    {
      name: 'HTML',
      icon: html
    },
    {
      name: 'CSS',
      icon: css
    },
    {
      name: 'Javascript',
      icon: javascript
    },
    {
      name: 'React',
      icon: react
    },
    {
      name: 'Python',
      icon: python
    },
    {
      name: 'MySQL',
      icon: sql
    },
  ]

  const frameworksLibraries = [
    {
      name: 'Flask',
      icon: flask
    },
    {
      name: 'Next.js',
      icon: nextjs
    },
    {
      name: 'Redux',
      icon: redux
    },
    {
      name: 'Three.js',
      icon: threejs
    },
    {
      name: 'Blender',
      icon: blender
    },
  ]

  const tools = [
    {
      name: 'Git',
      icon: git
    },
    {
      name: 'Github',
      icon: github
    },
    {
      name: 'Postman',
      icon: postman
    },
    {
      name: 'Gsap',
      icon: gsapLogo
    },
    {
      name: 'Vercel',
      icon: vercel
    },
    {
      name: 'Figma',
      icon: figma
    },
    {
      name: 'Canva',
      icon: canva
    },
    {
      name: 'Trello',
      icon: trello
    },
    {
      name: 'Slack',
      icon: slack
    },
    {
      name: 'Chat GPT',
      icon: gpt
    },

  ]

  const myLanguages = languages.map((item, index) => {
    return (
      <div key={index} className={`componentTwoImg ${styles.icons}`}>
        <Image src={item.icon.src} width={50} height={50} alt={`${item.name} icon`}/>
      </div>
    )
  })
  
  const myFrameworksLibraries = frameworksLibraries.map((item, index) => {
    return (
      <div key={index} className={`componentTwoImg ${styles.icons}`}>
        <Image src={item.icon.src} width={50} height={50} alt={`${item.name} icon`}/>
      </div>
    )
  })

  const myTools = tools.map((item, index) => {
    return (
      <div key={index} className={`componentTwoImg ${styles.icons}`}>
        <Image src={item.icon.src} width={50} height={50}/>
      </div>
    )
  })

  const projectsSection = [
    {
      id:1,
      name: 'Portfolio',
      link: 'https://nicolestruggia.vercel.app/',
      description: "My personal portfolio."
    },
    {
      id:2,
      name: 'Donair',
      link: 'https://donair.es',
      description: "A climate control, services and projects company."
    },
    {
      id:3,
      name: '2kids',
      link: 'https://github.com/Nicolettastr/2kids',
      description: "Marketplace for parents to find baby products"
    },
    {
      id:5,
      name: 'Netflix',
      link: 'https://netflix-clone-a3f34.web.app/',
      description: 'Stunning Netflix website replica'
    },
  ]

  useEffect(() => {
    const components = document.querySelectorAll('.component')
    const componentOne = document.querySelector('#componentPrevOne')
    const componentOneImg = document.querySelector('#componentOneImg')
    const componentTwo = document.querySelector('#componentTwo')
    const componentThree = document.querySelector('#componentThree')
    const componentThreeCont = document.querySelector('#componentThreeCont')
    const wrapper = document.querySelector('#wrapper')
    const componentTwoImg = document.querySelectorAll('.componentTwoImg')
    const moreBtnH2 = document.querySelectorAll('.moreBtnH2')
    const containerElement = containerRef.current;
    
    let tl = gsap.timeline();
    tl.from(bgRefElement, { opacity: 0, scale: 1, duration: 2, delay: 0.2 })

    let main = gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerElement,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: '+=3000'
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: componentOne,
        start: "top top",
        end: 'right left',
        scrub: true,
        containerAnimation: main,
      }
    }).from(wrapper, { opacity: 1}, '-=2')

    gsap.timeline({
      scrollTrigger: {
        trigger: componentOne,
        start: "left left",
        end: 'right left',
        scrub: true,
        containerAnimation: main,
      }
    }).from(componentOneImg, { scale: 1.6})

    gsap.timeline({
      scrollTrigger: {
        trigger: componentTwo,
        start: "left right",
        end: 'left left',
        scrub: true,
        containerAnimation: main,
      }
    }).from(componentTwoImg, { rotate: 45, scale: 0, x: 400})

    gsap.timeline({
      scrollTrigger: {
        trigger: componentTwo,
        start: "center left",
        end: 'left left',
        scrub: true,
        containerAnimation: main,
      }
    }).fromTo(componentThreeCont, {opacity: 0, scale: 1.5}, 
                                  {opacity: 1, scale: 1}, '-=1')
          
    gsap.timeline({
      scrollTrigger: {
        trigger: componentThree,
        start: "left left",
        end: "rigth left",
        scrub: true,
        containerAnimation: main,
      }
    }).fromTo(moreBtnH2, {opacity: 0, scale: 1.5}, {opacity: 1, scale: 1})

  }, [])

  return (
    <>
      <section ref={bgRef} className='allContainer'>
        <Banner/>
        <div className={styles.fade}></div>
      </section>

      <section ref={containerRef} id="container" className={styles.container}>
        {/* section one */}
        <section id="componentOne" className={`component componentOne ${styles.one}`}>
          <div id="componentPrevOne" className={`${styles.prevone}`}>
            <div id='wrapper' className={styles.wrapper}>
              <h1 className={`${styles.textStatic}`}>{`I'm a`}</h1>
                <ul className={`${styles.textDynamic}`}>
                  <li><span>Frontend Developer</span></li>
                  <li><span>Creative Coder</span></li>
                  <li><span>Tech Enthusiast</span></li>
                  <li><span>Problem Solver</span></li>
                  <li><span>Continuous Learner</span></li>
                </ul>
                <div className={styles.info}>
                  <p>My name is Nicole Struggia</p>
                  <p>A self-taught Frontend Developer. I am skilled in HTML, CSS, JavaScript and React.</p>
                  <p>I am always looking to expand my skills. One area of interest to me is 3D and animations. I am actively learning Three.js,       Blender, and CSS animations.
                  </p>
                </div>
            </div>
          </div>
          <figure className={styles.componentOneImage}>
          <Image 
          id='componentOneImg'
          src={webImage}
          alt='imagen propia' />
        </figure>
        </section>

         {/* section two */}
        <section id="componentTwo" className={`component ${styles.two}`}>
          <section className={styles.sectionTwo}>
            <div className={styles.mainContent}>
              <h2>Languages</h2>
              <div className={styles.skilssContent}>
                {myLanguages}
              </div>
            </div>
            <div className={styles.mainContent}>
              <h2>Frameworks and Libraries</h2>
              <div className={styles.skilssContent}>
                {myFrameworksLibraries}
              </div>
            </div>
            <div className={styles.mainContent}>
              <h2>Tools</h2>
              <div className={styles.skilssContent}>
                {myTools}
              </div>
            </div>
          </section>
        </section>

        {/* section three */}
        <section id="componentThree" className={`component ${styles.three}`}>
          <div id='componentThreeCont' className={styles.componentThreeCont}>
              <div id='cardContainer' className={styles.cardContainer}>
                <HomeProjects projects={projectsSection}/>
              </div>
              <div className={styles.moreBtn}>
                <h2 className='moreBtnH2'>View</h2>
                <h2 className='moreBtnH2'>All</h2>
                <h2 className='moreBtnH2'>My</h2>
                <h2 className='moreBtnH2'>Projects</h2>
                <a href=''>
                  <button 
                  className={styles.projectBtn}>
                    View All
                  </button>
                </a>
              </div>
          </div>
        </section>
      </section>

      <section className={styles.infoContainerSection}>
        <Contact/>
      </section>
      </>
    )
}

export default Home
