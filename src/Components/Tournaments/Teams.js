import React, { useState } from 'react';
import styles from "./Tournaments.module.css"

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
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['companyButtons']}>
          {companies.map((company) => (
            <button
              key={company}
              className={`${styles['companyBtn']} ${
                activeCompany === company ? styles['activeBtn'] : ''
              }`}
              onClick={() => setActiveCompany(company)}
            >
              {company}
            </button>
          ))}
        </div>
      </div>

      <div className={styles['roster']}>
        <div className={styles['rosterList']}>
          <table className={styles['table']}>
            <thead className={styles['tableHeader']}>
              <tr>
                <th className={styles['th']}>Name</th>
                <th className={styles['th']}>Kit No.</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.kitNo}>
                  <td className={styles['td']}>{player.name}</td>
                  <td className={styles['td']}>{player.kitNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles['preview']}>
          <img 
            src="/api/placeholder/200/80" 
            alt="TCS Logo" 
            className={styles['logo']}
          />
          <img 
            src="/api/placeholder/200/240" 
            alt="Team Jersey" 
            className={styles['jersey']}
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;