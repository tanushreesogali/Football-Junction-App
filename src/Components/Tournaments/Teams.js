import React, { useState } from 'react';
import styles from "./Tournaments.module.css"
import shirt from "../images/team shirt.png"
import logo from "../images/tcs logo.png"


const Teams = () => {
  const [activeCompany, setActiveCompany] = useState('TCS');

  const companies = [
    'GENPACT',
    'ZOMATO',
    'TCS',
    'ERICSSON',
    'WIPRO'
  ];

  const players = [
    { name: 'Vikram Malhotra', kitNo: 1 },
    { name: 'Priyansh Kapoor', kitNo: 2 },
    { name: 'Sehaj Verma', kitNo: 5 },
    { name: 'Naman Sharma', kitNo: 11 },
    { name: 'Udit Mehta', kitNo: 9 },
    { name: 'Veer Bansal', kitNo: 6 },
    { name: 'Sanjay Gupta', kitNo: 15 },
    { name: 'Karthik Joshi', kitNo: 8 },
    { name: 'Tushar Reddy', kitNo: 7 },
    { name: 'Prosenjit Chatterjee', kitNo: 22 },
    { name: 'Sreyash Iyer', kitNo: 10 }
  ];

  return (
    <div className={styles['t-container']}>
      <div className={styles['t-header']}>
        <div className={styles['t-companyButtons']}>
          {companies.map((company) => (
            <button
              key={company}
              className={`${styles['t-companyBtn']} ${
                activeCompany === company ? styles['t-activeBtn'] : ''
              }`}
              onClick={() => setActiveCompany(company)}
            >
              {company}
            </button>
          ))}
        </div>
      </div>

      <div className={styles['t-roster']}>
        <div className={styles['t-rosterList']}>
          <table className={styles['t-table']}>
            <thead className={styles['t-tableHeader']}>
              <tr>
                <th className={styles['t-th']}>Name</th>
                <th className={styles['t-th']}>Kit No.</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.kitNo}>
                  <td>{player.name}</td>
                  <td className={styles['t-td']}>{player.kitNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
      </div>
      <div className={styles['t-preview']}>
          <img 
            src={logo} 
            alt="TCS Logo" 
            className={styles['t-logo']}
          />
          <img 
            src={shirt} 
            alt="Team Jersey" 
            className={styles['t-jersey']}
          />
        </div>
    </div>
  );
};

export default Teams;