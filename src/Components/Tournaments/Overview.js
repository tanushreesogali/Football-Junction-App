import React from 'react';

import styles from "./Tournaments.module.css"

const Overview = () => {
  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <p className={styles['description']}>
        A premier football tournament you wouldn’t want to miss! This document serves as your comprehensive guide to participation, covering everything from eligibility requirements to match rules and awards. We encourage you to review it carefully to ensure a smooth and enjoyable experience throughout the tournament. Should you have any questions or require further clarification, please do not hesitate to reach out to us. Best of luck to all participating teams!
        </p>
      </header>

      <section className={styles['section']}>
        <h2 className={styles['sectionTitle']}>ELIGIBILITY</h2>
        <div className={styles['list']}>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Private and public business houses, corporations, state and central
            government departments, professional firms, and other bona fide businesses
            are eligible to participate in this tournament.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Only full-time employees of the above-mentioned types of companies are
            eligible to play.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Only registered players are permitted to participate.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Changes to the registered squad are allowed up to two days prior to the match
            day.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Players must submit a copy of their company IDs during registration and carry
            the original ID on match days.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            The organizer reserves the right to reject entries in case of any discrepancies or
            disputes during the registration process.
          </div>
        </div>
      </section>

      <section className={styles['captainsMeet']}>
        <h2 className={styles['sectionTitle']}>CAPTAINS' MEET: (Time and Venue- TBD)</h2>
        <div className={styles['captainsMeetList']}>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Captains' meet will take place 2-4 days prior to tournament start date.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Tournament jersey, shorts and stockings will be distributed.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Tournament trophies would be unveiled.
          </div>
          <div className={styles['listItem']}>
            <span className={styles['bullet']}>•</span>
            Tournament draw would take place in the presence of tournament
            ambassador.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;