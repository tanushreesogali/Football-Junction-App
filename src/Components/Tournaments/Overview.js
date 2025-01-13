import React from 'react';

import styles from "./Tournaments.module.css"

const Overview = () => {
  return (
    <div className={styles['o-container']}>
      <header className={styles['o-header']}>
        <p className={styles['o-description']}>
        A premier football tournament you wouldn’t want to miss! This document serves as your comprehensive guide to participation, covering everything from eligibility requirements to match rules and awards. We encourage you to review it carefully to ensure a smooth and enjoyable experience throughout the tournament. Should you have any questions or require further clarification, please do not hesitate to reach out to us. Best of luck to all participating teams!
        </p>
      </header>
      <br/>

      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>ELIGIBILITY</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
            Private and public business houses, corporations, state and central government departments, professional firms, and other bona fide businesses are eligible to participate in this tournament.
          </li>
          <li className={styles['o-listItem']}>
            Only full-time employees of the above-mentioned types of companies are eligible to play.
          </li>
          <li className={styles['o-listItem']}>
            Only registered players are permitted to participate.
          </li>
          <li className={styles['o-listItem']}>
            Changes to the registered squad are allowed up to two days prior to the match day.
          </li>
          <li className={styles['o-listItem']}>
            Players must submit a copy of their company IDs during registration and carry the original ID on match days.
          </li>
          <li className={styles['o-listItem']}>
            The organizer reserves the right to reject entries in case of any discrepancies or disputes during the registration process.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>CAPTAINS' MEET: (Time and Venue-TBD)</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
            Captains' meet will take place 2-4 days prior to tournament start date.
          </li>
          <li className={styles['o-listItem']}>
            Tournament jersey, shorts and stockings will be distributed.
          </li>
          <li className={styles['o-listItem']}>
            Tournament trophies would be unveiled.
          </li>
          <li className={styles['o-listItem']}>
            Tournament draw would take place in the presence of tournament ambassador.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Overview;