'use client'
import { useEffect, useState } from 'react';
import styles from '../../styles/About.module.css'
import Image from 'next/image';
import typing from '../../public/me/typing.png'
import html from '../../public/skills/html.svg'
import css from '../../public/skills/css.svg'
import javascript from '../../public/skills/javascript.svg'
import react from '../../public/skills/react.svg'
import nextjs from '../../public/skills/nextjs.svg'
import git from '../../public/skills/git.svg'
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import Loading from '../../components/loading'

const About = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
    }, 3000)
    });


    const skills = [html, css, javascript, react, nextjs, git]

    const customAnimation = keyframes`
        from {
            opacity: 0;
            scale: 0.5;
            transform: translate3d(-200px, -100px, 0);
        }

        to {
            opacity: 1;
            scale: 1;
            transform: translate3d(0, 0, 0);
        }
    `;

    return (
        <>
        { loading ? <Loading/> : 
        <Reveal keyframes={customAnimation} duration={1500} timingFunction="ease-in-out">
        <section className={styles.aboutSection}>
            <p className='about'>ABOUT ME</p>
            <div className={styles.titleSection}>
                <div id='titles' className={styles.titleSectionCont}>
                    <section className={styles.title}>
                        <h2>NICOLE</h2>
                        <h2>STRUGGIA</h2>
                    </section>
                    <section className={styles.subtitle}>
                        <h2>FRONTEND</h2>
                        <h2>DEVELOPER</h2>
                    </section>
                </div>
                <div className={styles.imageCont}>
                <figure>
                    <Image src={typing} />
                </figure>
                </div>
            </div>
            <section id='presentation' className={styles.info}>
                <p>Hello! I am Nicole Struggia, a passionate Front-end Developer based in Madrid, Spain. I have over 3 years of experience in web development, specializing in HTML, CSS, JavaScript, React, Redux, and Git. My goal is to become a senior developer and expand my skills in 3D development. I enjoy playing the piano, watching series, and exploring the world of horror movies. Write me and we can collaborate on exciting projects together! Feel free to reach out to me at nicolettastruggia@hotmail.com. You can also find me on GitHub and LinkedIn.</p>
            </section>
            <section id='skills'  className={styles.skillsContainer}>
                <h2>Most Use Skills</h2>
                <div className={styles.skills} >
                {skills.map((item, index) => {
                    return (
                        <Image key={index} src={item} width={60} height={60} />
                    )
                })}
                </div>
            </section>
        </section>
        </Reveal>
        }
        </>
    )
};

export default About;