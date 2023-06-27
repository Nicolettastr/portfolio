import me from '../../public/me/me.png'
import Image from 'next/image';
import styles from '../../styles/Resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Resume = () => {

    const projects = [
        {
            id: 1,
            name: 'Portfolio',
            sub: 'Personal portfolio',
            front: 'HTML, CSS, Javascript, React, Next.js, Gsap',
            date: '06/2023. Present',
            design: 'Figma, Canva'
        },
        {
            id: 2,
            name: '2kids',
            sub: 'Startup Project, Marketplace to buy and sell baby and parent products.',
            front: 'HTML, CSS, Javascript, React, Flux ',
            back: 'Back: Python, Flask, MySQL',
            date: '04/2023. Present',
            design: 'Figma, Canva'
        },
        {
            id: 3,
            name: 'Netflix',
            sub: 'Personal project, Netflix clone website project.',
            front: 'HTML, CSS, Javascript, React, Redux ',
            back: 'Back: Firebase',
            date: '03/2023 / 04/2023',
            design: 'Figma, Canva',
            api: 'Apis: Stripe'
        },
        {
            id: 4,
            name: 'PetHouse',
            sub: ' A Platform to search for hotels options for pets',
            front: 'HTML, CSS, Javascript, React, Flux',
            back: 'Back: Python, Flask, MySQL',
            date: '02/2023 / 03/2023',
            design: 'Figma, Canva'
        },
        {
            id: 5,
            name: 'Donair',
            sub: ' Frontend Developer',
            title: ' Web development and updating, hosting transfer, domain, and website maintenance.',
            front: 'HTML, CSS, Javascript, React, Flux',
            date: '01/2023. Present',
            design: 'Figma, Canva'
        }
    ]

    const skills = [
        "HTML",
        "Next.js",
        "Flask",
        "CSS",
        "Three.js",
        "MySQL",
        "JavaScript",
        "Redux",
        "Git",
        "React",
        "Python",
        "Blender"
    ];

    const education = [
        {
            id: 1,
            name: 'Full Stack Developer',
            place: '4GeeksAcademy',
            country: 'Madrid, Spain'
        },
        {
            id: 2,
            name: 'Javascript and React Master',
            place: 'Udemy',
            country: 'Madrid, Spain'
        },
        {
            id: 3,
            name: 'Frontend y Backend with Javascript for web development',
            place: 'Platzi',
            country: 'Madrid, Spain'
        }
    ]

    const languages = [
        {
            lang: 'Spanish',
            lv: 'Native',
        },
        {
            lang: 'English',
            lv: 'Highly proficient',
        },
        {
            lang: 'German',
            lv: 'A2',
        }
    ]

    return (
        <section className={styles.resumePage}>
             <p className='about'>RESUME</p>
             <button className={styles.resumeBtn}>
                <a href='/cv/nicole.pdf' download='Nicole Struggia Curriculum.pdf'>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </a>
             </button>
             <section className={styles.resumenContainer}>

                <div className={styles.resumeData}>
                    <div>
                        <h2>Nicole Struggia</h2>
                        <h3>Front-end Developer</h3>
                        <div>
                            <p>nicolettastruggia@hotmail.com</p>
                            <p>657484475</p>
                            <p>Madrid, Spain</p>
                        </div>
                        <div className={styles.resumeLinks}>
                            <a href="https://www.linkedin.com/in/nicole-struggia/" target='_blank' rel="noreferrer">Linkedin</a>
                            <a href="https://github.com/Nicolettastr" target='_blank' rel="noreferrer">Github</a>
                            <a href="https://nicolestruggia.vercel.app/" target='_blank' rel="noreferrer">Portfolio</a>
                        </div>
                    </div>
                    <div className={styles.resumePhoto}>
                        <figure>
                            <Image src={me} />
                        </figure>
                    </div>
                </div>

                <div className={styles.resumeProfile}>
                    <h2>Profile</h2>
                    <p>
                    As a Frontend Developer, I have extensive knowledge of HTML, CSS, Javascript, React, Redux, Git and other
                    technologies. Alongside, I possess strong problem-solving abilities, attention to detail, collaboration skills,
                    adaptability, creativity in design, time management, communication skills, and a commitment to continuous learning.
                    </p>
                </div>

                <section className={styles.resumeSection}>
                    <h2>Projects and Professional Experience</h2>
                    {projects.map((item) => {
                        return (
                            <div key={item.id} className={styles.resumeProjects}>
                                 <div className={styles.resumeItems}>
                                    <p>{`${item.name}`}</p>
                                    <p>{`Madrid, ${item.sub}`}</p>
                                    <p>{item.title}</p>
                                    <ul className={styles.resumeList}>
                                        {item.front && <li>{`Front: ${item.front}`}</li>}
                                        {item.back && <li>{item.back}</li>}
                                        {item.api && <li>{item.api}</li>}
                                        {item.design && <li>{`Design; ${item.design}`}</li>}
                                    </ul>
                                </div>
                                <div className={styles.resumeDate}>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>

                <section className={styles.skillsSection}>
                    <h2>My Skills</h2>
                    <ul className={styles.skills} >
                        {skills.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </section>

                <section className={styles.educationSection}>
                    <h2>Education</h2>
                    {education.map((item, index) => {
                        return (
                            <section className={styles.educationItem} key={index}>
                            <div>
                                <p>{`${item.name}, ${item.place}`}</p>
                            </div>
                            <div className={styles.country}>
                                <p>{item.country}</p>
                            </div>
                            </section>
                        )
                    })}
                </section>

                <section className={styles.langSection}>
                    <h2>Languages</h2>
                    {languages.map((item, index) => {
                        return (
                            <div className={styles.langInfo} key={index}> 
                                <h4>{item.lang}</h4>
                                <p>{item.lv}</p>
                            </div>    
                        )
                    })}
                </section>

                <section className={styles.additionalSection}>
                    <h2>Additional Professional Experience</h2>
                    <div className={styles.resumeExp}>
                        <div>
                            <h3>Duddy</h3>
                            <p>Barista</p>
                        </div>
                        <div>
                            <p>2021 - 2022</p>
                            <p>Madrid, Spain</p>
                        </div>
                    </div>
                    <div className={styles.resumeExp}>
                        <div>
                            <h3>Cristina Oria</h3>
                            <p>Manager</p>
                        </div>
                        <div>
                            <p>2018 - 2021</p>
                            <p>Madrid, Spain</p>
                        </div>
                    </div>
                </section>

            </section>
        </section>
    )
};

export default Resume;