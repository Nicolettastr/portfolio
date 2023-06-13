import {useEffect, useRef} from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import spark from '../public/bb.png'
import { gsap } from 'gsap';

const VideoComponent = () => {

    const bg = useRef(null);
    const bgRefElement = bg.current;

    useEffect(() => {
        let tl = gsap.timeline();
        tl.to(bgRefElement, { scale: 0.9, duration: 2, opacity: 1, delay: 0.2 })
    }, [])

    return (
        <Image ref={bgRefElement} className={styles.bgImage} src={spark} />
    )
};

export default VideoComponent;