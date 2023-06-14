import { gsap } from "gsap";
import { useEffect } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import styles from '../styles/contact.module.css'
import Image from "next/image";
import linkedin from '../public/skills/linkedin.svg'
import github from '../public/skills/github.svg'

const Contact = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const contactSection = document.querySelector('#contactSection')
        const divsection = document.querySelector('#divsection')
        const contactContainer = document.querySelector('.hireMe')
        const formSection = document.querySelector('#formSection')
        const buttonId = document.querySelector('#button')
        const hexagon = document.querySelectorAll('.hexagon')

        gsap.timeline({
            scrollTrigger: {
              trigger: contactSection,
              start: "top top",
              end: 'bottom bottom',
              scrub: true,
            }
          }).fromTo(contactContainer, { x: 400, opacity: 0} , {x:0, opacity: 1 } )

          gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
          }).fromTo(formSection, { x: 400, opacity: 0} , {x:0, opacity: 1 } )

          gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
          }).fromTo(buttonId, { x: 400, opacity: 0} , {x:0, opacity: 1 } )

    })

    return (
        <div id="divsection" className={styles.divsection}>
        <section id="contactSection" className={styles.contactSectionBg}>
            <div className={styles.allContact}>
            <div>
                <h2 id="contactContainer" className={`hireMe ${styles.hireMe}`}>Hire Me</h2>
            </div>
            <form id="formSection" action="" className={styles.formSection}>
                <div className={styles.inputContainerSection}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className={styles.textAreaContainer}>
                    <label htmlFor="">Message</label>
                    <textarea type="text" placeholder="Message" />
                </div>
                <div id="button" className={styles.buttonContainer}> 
                <button type="Submit">Submit</button>
            </div>
            </form>
            </div>
        </section>
        
        <section className={styles.socialNetwork}>
            <div className={`hexagon ${styles.hexagon}`}>
                <span>
                    <Image src={linkedin} alt='linkedin link'/>
                </span>
            </div>
            <div className={`hexagon ${styles.hexagon2}`}>
                <span>
                    <Image src={github} alt='github link'/>
                </span>
            </div>
        </section>
        </div>
    )
};

export default Contact;