import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PrivateProfileHeader.module.scss';
import GradientHeader from '../GradientHeader';
import uniData from '../../resources/data/university-data';

const PrivateProfileHeader = ({ user, toggleIsEditing }) => {
  const { name, university, classOf } = user;

  const year = String(classOf).slice(2);

  return (
    <>
      <GradientHeader uni={uniData[1]} />
      <header className={styles.header}>
        <h2>Profile</h2>
        <section className={styles.headerContainer}>
          <div className={styles.image}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
              alt="a sponge"
            />
            <label htmlFor="avatar" className={styles.avatarButton}>
              <FontAwesomeIcon icon="plus-circle" className={styles.avatarIcon} />
              <span />
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </label>
          </div>
          <article className={styles.headerInfo}>
            <h3>{name}</h3>
            <p>{`${university.title} (${university.abbreviation}) '${year}`}</p>
          </article>
        </section>
        <div className={styles.aboutWrapper}>
          <h3 className={styles.aboutTitle}>About</h3>
          <button type="button" onClick={toggleIsEditing}>
            Edit profile
          </button>
        </div>
      </header>
    </>
  );
};

export default PrivateProfileHeader;
