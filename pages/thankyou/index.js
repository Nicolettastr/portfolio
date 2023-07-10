import styles from '../../styles/contact.module.css'

const ThankYou = () => {
    return (
        <section className={styles.thanksSection}>
            <section className={styles.sectionInner}>
            <div>
                <p>
                Thank you for reaching out and sending me a message. Your communication is greatly appreciated. I wanted to let you know that I will be contacting you soon to follow up on our conversation.
                </p>
                <p>
                Thank you again for your message, and I look forward to speaking with you soon.
                </p>
                <p>Nicole Struggia.</p>
            </div>
            <div className={styles.socialMediaTY}>
                <p>See more about my profile and work at:</p>
                <div>
                    <a href="https://www.linkedin.com/in/nicole-struggia/" rel="noreferrer" target="_blank">Linkedin</a>
                    <a href="https://github.com/Nicolettastr" rel="noreferrer" target="_blank">Github</a>
                </div>
            </div>
            </section>
        </section>
    )
};

export default ThankYou;