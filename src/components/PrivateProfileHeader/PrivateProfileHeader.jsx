import React from 'react';
import styles from './PrivateProfileHeader.module.scss';
import GradientHeader from '../GradientHeader';
import uniData from '../../resources/data/university-data';

const PrivateProfileHeader = ({ user }) => {
  const { name, university, classOf } = user;

  const year = String(classOf).slice(2);

  return (
    <>
      <GradientHeader uni={uniData[1]} />
      <header className={styles.header}>
        <h2>Profile</h2>
        <section className={styles.headerContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
            alt="a sponge"
          />
          <article className={styles.headerInfo}>
            <h3>{name}</h3>
            <p>{`${university.title} (${university.abbreviation}) '${year}`}</p>
          </article>
        </section>
      </header>
    </>
  );
};

export default PrivateProfileHeader;
