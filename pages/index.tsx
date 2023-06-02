'use client'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import VideoComponent from '../components/videoComponent'
import { useEffect, useRef } from 'react'
import webImage from '../public/web.png'
import canva from '../public/skills/canva.svg'
import css from '../public/skills/css.svg'
import figma from '../public/skills/figma.svg'
import flask from '../public/skills/flask.svg'
import git from '../public/skills/git.svg'
import github from '../public/skills/github.svg'
import gpt from '../public/skills/gpt.svg'
import html from '../public/skills/html.svg'
import javascript from '../public/skills/javascript.svg'
import linkedin from '../public/skills/linkedin.svg'
import nextjs from '../public/skills/nextjs.svg'
import postman from '../public/skills/postman.svg'
import python from '../public/skills/python.svg'
import react from '../public/skills/react.svg'
import redux from '../public/skills/redux.svg'
import slack from '../public/skills/slack.svg'
import sql from '../public/skills/sql.svg'
import trello from '../public/skills/trello.svg'
import vercel from '../public/skills/vercel.svg'
import youtube from '../public/skills/youtube.svg'
import blender from '../public/skills/blender.svg'
import threejs from '../public/skills/youtube.svg'
import gsapLogo from '../public/skills/gsap.png'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null);
  const bgRef = useRef(null);

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

  const myLanguages = languages.map((item, index) => {
    return (
      <div key={index} className={`componentTwoImg ${styles.icons}`}>
        <Image src={item.icon.src} width={50} height={50}/>
      </div>
    )
  })

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

  
  const myFrameworksLibraries = frameworksLibraries.map((item, index) => {
    return (
      <div key={index} className={`componentTwoImg ${styles.icons}`}>
        <Image src={item.icon.src} width={50} height={50}/>
      </div>
    )
  })

  const tools = [
    {
      name: 'Git',
      icon: git
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
      name: 'Vercel',
      icon: vercel
    },
    {
      name: 'Youtube',
      icon: youtube
    },
    {
      name: 'LinkdIn',
      icon: linkedin
    },
    {
      name: 'Chat GPT',
      icon: gpt
    },

  ]

  const myTools = tools.map((item, index) => {
    return (
      <div key={index} className={`componentTwoImg ${styles.icons}`}>
        <Image src={item.icon.src} width={50} height={50}/>
      </div>
    )
  })

  const images = [
    {
      id: 1,
      name: '/netflix.png',
      alt: 'Netflix clone',
      skils: 'HTML, CSS, Javascript, React, Firebase, Stripe',
      description: 'A Netflix-clone website project.'
    },
    {
      id: 2,
      name: '/donair.png',
      alt: 'Donair',
      skils: 'HTML, CSS, Javascript, React, Bootstrap',
      description: 'Climatization, services and projects company.'
    },
    {
      id: 3,
      name: '/pethouse.png',
      alt: 'Pethouse',
      skils: 'HTML, CSS, Javascript, React, Bootstrap, Python, Flask, MySQL',
      description: 'Pet hotels Marketplace.'
    }
  ];

  const imagesSection = images.map((item) => {
    return (
      <div key={item.id} className={`local ${styles.local}`}>
        <div className={styles.localInner}>
          <h2>{item.alt}</h2>
          <div className={styles.localInfo}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    )
  });

  useEffect(() => {
    const components = document.querySelectorAll('.component')
    const textElements = document.querySelectorAll('.textReveal')
    const componentOne = document.querySelector('#componentPrevOne')
    const componentOneImg = document.querySelector('#componentOneImg')
    const componentTwo = document.querySelector('#componentTwo')
    const wrapper = document.querySelector('#wrapper')
    const componentTwoImg = document.querySelectorAll('.componentTwoImg')
    const localElements = document.querySelectorAll('.local')
    const containerElement = containerRef.current;
    const bgRefElement = bgRef.current;

    let tl = gsap.timeline();
    tl.from(bgRefElement, { scale: 0.5, duration: 2, opacity: 0, delay: 0.2 })
      .to(textElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, stagger: 0.3, duration: 1 }, "-=0.9")
      .to(localElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, opacity: 1, duration: 1 }, '+=1')
      

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
    }).from(componentTwoImg, { rotate: 45, scale: 0})

  }, [])

  return (
    <>
    <section className='allContainer'>
    <div ref={bgRef} className={styles.bg}>
      <VideoComponent />
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.innerContent}>
            <h1 className={`textReveal ${styles.textReveal}`}>Success <strong className={styles.not}>Is </strong>not</h1>
            <h2 className={`textReveal ${styles.textReveal}`}>About <strong className={styles.not}>Being</strong> the best.</h2>
            <h2  className={`textReveal ${styles.textReveal}`}>It is about being <strong><span className={styles.not}>Better</span></strong></h2>
            <h2  className={`textReveal ${styles.textReveal}`}> <strong><span className={styles.not}>Than</span></strong> you were <strong><span className={styles.not}>Yesterday.</span></strong></h2>
          </div>
        </div>
      </div>

      <div id='projectsInfo' className={styles.locationsContainer}>
          {imagesSection}
      </div>
    </section>
      
    <section ref={containerRef} id="container" className={styles.container}>
      <div id="componentPrevOne" className={`component ${styles.prevone}`}>
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
            <p>I am always looking to expand my skills. One area of interest to me is 3D and animations. I am actively learning Three.js, Blender, and CSS animations.
          </p>
          </div>
        </div>
      </div>
      <section id="componentOne" className={`component componentOne ${styles.one}`}>
          <figure className={styles.componentOneImage}>
            <Image 
            id='componentOneImg'
            src={webImage} />
          </figure>
      </section>


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


      <section id="componentThree" className={`component ${styles.three}`}>sections</section>
      <section id="componentFour" className={`component ${styles.four}`}>sections</section>
    </section>
    </>
  )
}

export default Home
