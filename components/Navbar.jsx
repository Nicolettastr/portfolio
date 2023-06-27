import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/navbar.module.css'
import Image from 'next/image';

const NavbarComponent = () => {
    return (
        <Navbar className={styles.navbar_section} expand="md">
          <Container className={styles.nav_btn} fluid>
            <Navbar.Brand href="#">
              <Image
              className={styles.navbar_image}
              src='/nicole.png'
              alt='logo Nicole'
              width={150}
              height={60} />
            </Navbar.Brand>
              <Navbar.Toggle aria-controls={styles.navbarScroll} />
              <Navbar.Collapse id="navbarScroll">
              <Nav
                className={`me-auto my-2 my-lg-0 ${styles.navbar_optionsContainer}`}
                  navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About Me</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="resume">Resume</Nav.Link>
                <Nav.Link href="future">Future</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
};

export default NavbarComponent;