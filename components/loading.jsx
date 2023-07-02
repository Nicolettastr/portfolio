import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import styles from '../styles/Loading.module.css'

const Loading = () => {


    const loadingPage = keyframes`
    
        0% {
            scale: 0;
        }

        100% {
            scale: 1;
        }
    
    `;

    return (
        <Reveal keyframes={loadingPage} duration={3000} fraction={1}>
            <section className={styles.loadingSection}>
                <div className={styles.spinner}></div>
            </section>
        </Reveal>
    )
};

export default Loading;