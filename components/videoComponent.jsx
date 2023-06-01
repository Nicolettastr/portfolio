import styles from '../styles/Home.module.css'

const VideoComponent = () => {
    return (
        <>
        <div className={styles.background}></div>
            <div className={styles.videoContainer}>
            <video muted autoPlay loop >
                <source src='/pexel.mp4' type='video/mp4' />
            </video>
        </div>
        </>
    )
};

export default VideoComponent;