'use client'
import {useRef, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import VideoComponent from '../components/videoComponent'
import gsap from 'gsap'

const Banner = () => {

    
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
      description: 'Climate control, services and projects company.'
    },
    {
      id: 3,
      name: '/pethouse.png',
      alt: 'Pethouse',
      skils: 'HTML, CSS, Javascript, React, Bootstrap, Python, Flask, MySQL',
      description: 'A Platform to search for hotels options for pets.'
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

    const bgRef = useRef(null);

    const bgRefElement = bgRef.current;

    useEffect(() => {
        const textElements = document.querySelectorAll('.textReveal')
        const localElements = document.querySelectorAll('.local')
    
        let tl = gsap.timeline();
        tl.from(bgRefElement, { scale: 0.5, duration: 2, opacity: 0, delay: 0.2 })
          .to(textElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, stagger: 0.3, duration: 1 }, "-=0.9")
          .to(localElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, opacity: 1, duration: 1 }, '+=1')
    }, [])

    return (
        <>
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
        </>
    )
};

export default Banner;