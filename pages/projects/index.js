import { useEffect } from 'react'
import ProjectsCard from '../../components/projectCard'
import styles from '../../styles/Project.module.css'
import gsap from 'gsap'

const Projects = () => {

    const projects = [
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
          description: "Marketplace for parents to find baby products."
        },
        {
          id:5,
          name: 'Netflix',
          link: 'https://netflix-clone-a3f34.web.app/',
          description: 'Stunning Netflix website replica.'
        },
        {
            id:6,
            name: 'Solar System',
            link: 'https://solar-system-chi-ochre.vercel.app/',
            description: 'Immersive 3D solar system experience using Three.js.'
          },
          {
            id:7,
            name: 'PetHouse',
            link: 'https://sample-service-name-f7fr.onrender.com/',
            description: 'A Platform to search for hotels options for pets.'
          },
          {
            id:8,
            name: 'To Do List',
            link: 'https://to-do-list-react-v2-aiq43pp6l-nicolettastr.vercel.app/',
            description: 'User-friendly to-do list application allowing users to organize tasks.'
          },
          {
            id:9,
            name: 'Star Wars',
            link: 'https://starwars-kappa-five.vercel.app/',
            description: 'website to show information about characters and planets.'
          },
          {
            id:10,
            name: 'Epic Journey',
            link: 'https://javascript-game-project.vercel.app/',
            description: 'Players navigate through levels, overcoming obstacles to reach the stars.'
          },
      ]

    const beginnings = [
        {
            id:1,
            name: 'Postcard',
            link: 'https://postcard-gamma.vercel.app/',
            description: "Simple PostCard layout."
          },
          {
            id:2,
            name: 'Counter',
            link: 'https://simple-counter-4-geeks.vercel.app/',
            description: "Counter layout, with intuitive buttons to use."
          },
          {
            id:3,
            name: 'Traffic Lights',
            link: 'https://traffic-lights-tau.vercel.app/',
            description: "Interactive traffic lights layout."
          },
          {
            id:5,
            name: 'Calculator',
            link: 'https://calculator-coder-byte.vercel.app/',
            description: 'Building a functional calculator with React.'
          },
          {
            id: 6,
            name: 'Animations',
            link: 'https://animaciones-theta.vercel.app/',
            description: 'Creating a captivating bunnies moving animations to play counting them'
          },
          {
            id: 7,
            name: 'BatataBit',
            link: 'https://maquetaci-n-de-pagina-web.vercel.app/',
            description: 'Creating a criptocurrency website layout'
          }
    ]


    return (
        <section className={styles.container}>
            <p className='about'>PROJECTS</p>
            <section className={styles.projectsSection}>
                <h2 className={styles.title}>Masterworks: Showcasing My Finest Creations and Achievements</h2>
                <div className={styles.projectsInfo}>
                    <ProjectsCard projects={projects}/>
                </div>
            </section>
            <section className={styles.projectsSectionB}>
                <h2 className={styles.title}>The Learning Path: Embarking on my Journey of Early Projects</h2>
                <div className={styles.projectsInfo}>
                    <ProjectsCard projects={beginnings}/>
                </div>
            </section>
        </section>
    )
}

export default Projects;