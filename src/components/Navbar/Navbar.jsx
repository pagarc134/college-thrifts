import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag,
  faCamera,
  faUserCircle,
  faComments,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.Navbar}>
    <a
      id={styles.shoppingButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon={faTag} label="shoppingButton" />
    </a>
    <a
      id={styles.messageButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon={faComments} label="messageButton" />
    </a>
    <a
      id={styles.cameraButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon={faCamera} label="cameraButton" />
    </a>
    <a
      id={styles.carbonFootprintButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon={faGlobe} label="carbonFootprintButton" />
    </a>
    <a
      id={styles.profileButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon={faUserCircle} label="profileButton" />
    </a>
  </nav>
);

export default Navbar;
