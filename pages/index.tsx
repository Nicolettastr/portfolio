'use client'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import webImage from '../public/web.png'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null);
  const bgRef = useRef(null);

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
  })

  useEffect(() => {
    const components = document.querySelectorAll('.component')
    const textElements = document.querySelectorAll('.textReveal')
    const componentPrevOne = document.querySelector('#componentPrevOne')
    const textRevealPrevOne = document.querySelectorAll('.textRevealPrevOne')
    const componentOne = document.querySelector('#componentOne')
    const componentOneImg = document.querySelector('#componentOneImg')
    const componentTwo = document.querySelector('#componentTwo')
    const componentTwoImg = document.querySelector('#componentTwoImg')
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
        start: "left left",
        end: 'right left',
        scrub: true,
        containerAnimation: main,
        markers: true
      }
    }).from(componentOneImg, { scale: 1.3})

    gsap.timeline({
      scrollTrigger: {
        trigger: componentTwo,
        start: "left right",
        end: 'left left',
        scrub: true,
        containerAnimation: main,
        markers: true
      }
    }).to(componentTwoImg, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, opacity: 1, duration: 1, rotate: -90, scale: 0.9 }, '+=1')

  }, [])

  return (
    <>
    <section className='allContainer'>
    <div ref={bgRef} className={styles.bg}>
      <div className={styles.background}></div>
      <div className={styles.videoContainer}>
        <video muted autoPlay loop >
          <source src='/pexel.mp4' type='video/mp4' />
        </video>
      </div>
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

      <div className={styles.locationsContainer}>
          {imagesSection}
      </div>
    </section>
      
    <section ref={containerRef} id="container" className={styles.container}>
      <div id="componentPrevOne" className={`component ${styles.prevone}`}>
        <div className={styles.wrapper}>
          <h1  className={`${styles.textStatic}`}>I'm A</h1>
          <ul className={`${styles.textDynamic}`}>
            <li><span>Frontend Developer</span></li>
            <li><span>Creative Coder</span></li>
            <li><span>Tech Enthusiast</span></li>
            <li><span>Problem Solver</span></li>
            <li><span>Continuous Learner</span></li>
          </ul>
        </div>
      </div>
      <div id="componentOne" className={`component ${styles.one}`}>
        <Image 
        id='componentOneImg'
        src={webImage} />
      </div>
      <div id="componentTwo" className={`component ${styles.two}`}>
        <div id='componentTwoImg' className={styles.square}>
        </div>
        <div id='componentTwoText' className={styles.squareText}>
        </div>
      </div>
      <div id="componentThree" className={`component ${styles.three}`}>sections</div>
      <div id="componentFour" className={`component ${styles.four}`}>sections</div>
    </section>
    </>
  )
}

export default Home
