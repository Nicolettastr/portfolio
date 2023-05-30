'use client'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  const images = [
    {
      id: 1,
      name: '/netflix.png',
      alt: 'netflix project'
    },
    {
      id: 2,
      name: '/donair.png',
      alt: 'donair web site'
    },
    {
      id: 3,
      name: '/pethouse.png',
      alt: 'pethouse project'
    }
  ];

  const imagesSection = images.map((item) => {
    return (
      <div key={item.id} className={`local ${styles.local}`}>
        <Image 
        className={styles.projectImg}
        src={item.name}
        width={500}
        height={150}
        alt={item.alt}
        />
      </div>
    )
  })

  useEffect(() => {
    const components = document.querySelectorAll('#component')
    const textElements = document.querySelectorAll('.textReveal')
    const localElements = document.querySelectorAll('.local')
    const containerElement = containerRef.current;
    const bgRefElement = bgRef.current;

    let tl = gsap.timeline();
    tl.from(bgRefElement, { scale: 0.6, duration: 2, opacity: 0, delay: 0.2 })
      .to(textElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, stagger: 0.3, duration: 1 }, "-=0.9")
      .to(localElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, opacity: 1, duration: 1 }, '+=1')

    gsap.to(components, {
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
  }, [])

  return (
    <>
    <section className='allContainer'>
    <div ref={bgRef} className={styles.bg}><div className={styles.background}></div></div>
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
      <div id="component" className={styles.one}>sections</div>
      <div id="component" className={styles.two}>sections</div>
      <div id="component" className={styles.three}>sections</div>
      <div id="component" className={styles.four}>sections</div>
    </section>
    </>
  )
}

export default Home
