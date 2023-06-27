import styles from '../../styles/About.module.css'
import Image from 'next/image';
import me from '../../public/me/me.png'
import html from '../../public/skills/html.svg'
import css from '../../public/skills/css.svg'
import javascript from '../../public/skills/javascript.svg'
import react from '../../public/skills/react.svg'
import nextjs from '../../public/skills/nextjs.svg'
import git from '../../public/skills/git.svg'

const About = () => {

    const skills = [html, css, javascript, react, nextjs, git]

    return (
        <section className={styles.aboutSection}>
            <p className='about'>ABOUT ME</p>
            <div className={styles.titleSection}>
                <div className={styles.titleSectionCont}>
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
                    <Image src={me} />
                </figure>
                </div>
            </div>
            <section className={styles.info}>
                <p>Hello! I am Nicole Struggia, a passionate Front-end Developer based in Madrid, Spain. I have over 3 years of experience in web development, specializing in HTML, CSS, JavaScript, React, Redux, and Git. My goal is to become a senior developer and expand my skills in 3D development. I enjoy playing the piano, watching series, and exploring the world of horror movies. Write me and we can collaborate on exciting projects together! Feel free to reach out to me at nicolettastruggia@hotmail.com. You can also find me on GitHub and LinkedIn.</p>
            </section>
            <section className={styles.skillsContainer}>
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
    )
};

export default About;