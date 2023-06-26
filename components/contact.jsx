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

        const contactSection = document.querySelector('.principalContactSection')
        const contactContainer = document.querySelector('.hireMe')
        const formSection = document.querySelector('#formSection')
        const buttonId = document.querySelector('#button')
        const hexagons = document.querySelectorAll('.hexagonAnimation')

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

          
          gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
          }).fromTo(hexagons, { scale: 0} , {scale:1, duration: 2} )

    }, [])

    return (
        <div className={`principalContactSection ${styles.divsection}`}>
        <section id="contactSection" className={styles.contactSectionBg}>
            <div className={styles.allContact}>
            <div id="contactContainer" >
                <h2 className={`hireMe ${styles.hireMe}`}>Hire Me</h2>
            </div>
            <form id="formSection"  action="https://formsubmit.co/nicolettastruggia@hotmail.com" method="POST" className={styles.formSection}>
                <div className={styles.inputContainerSection}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" placeholder="Email Address"/>
                    </div>
                </div>
                <div className={styles.textAreaContainer}>
                    <label htmlFor="Message">Message</label>
                    <textarea type="text" placeholder="Message" />
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="http://localhost:3000/thankyou"/>
                </div>
                <div id="button" className={styles.buttonContainer}> 
                <button type="Submit">Submit</button>
            </div>
            </form>
            </div>
        </section>
        
        <section className={styles.socialNetwork}>
            <div className={`hexagonAnimation ${styles.hexagon}`}>
                <a href="https://www.linkedin.com/in/nicole-struggia/" rel="noreferrer" target="_blank">
                    <Image src={linkedin} alt='linkedin link'/>
                </a>
            </div>
            <div className={`hexagonAnimation ${styles.hexagon2}`}>
                <a href="https://github.com/Nicolettastr" target="_blank" rel="noreferrer">
                    <Image src={github} alt='github link'/>
                </a>
            </div>
        </section>
        </div>
    )
};

export default Contact;