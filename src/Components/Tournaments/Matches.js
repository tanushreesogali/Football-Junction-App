import React from "react";
import styles from "./Tournaments.module.css";

const matchData = [
  {
    group: "DAY 3 MATCHES, QUATERFINAL - SILVER",
    matches: [
      { team1: "Star TV", score1: "0", score2: "5", team2: "Zomato" },
      { team1: "Siemens", score1: "", score2: "", team2: "Infosys" },
      { team1: "Genpact(2)", score1: "0", score2: "0", team2: "ITC(3)" },
      { team1: "Globsync", score1: "1", score2: "0", team2: "Income Tax" },
    ],
  },
  {
    group: "DAY 3 MATCHES, QUATERFINAL - GOLD",
    matches: [
      { team1: "TCS", score1: "0", score2: "1", team2: "Braithwaite" },
      { team1: "ABP Digital", score1: "0", score2: "3", team2: "Infiflex" },
      { team1: "Capgemini(1)", score1: "1", score2: "1", team2: "Ernst & Young(3)" },
      { team1: "Ercisson", score1: "0", score2: "3", team2: "Sunknowledge" },
    ],
  },
  {
    group: "DAY 3 MATCHES, QUATERFINAL - BRONZE",
    matches: [
      { team1: "Ericsson", score1: "", score2: "", team2: "Capgemini" },
      { team1: "ABP Digital", score1: "0", score2: "5", team2: "TCS" },
      { team1: "Genpact", score1: "", score2: "", team2: "Siemens" },
      { team1: "Income Tax", score1: "0", score2: "0", team2: "Star TV" },
    ],
  },
  {
    group: "DAY 3 MATCHES, KNOCKOUT SEMIFINAL - SILVER",
    matches: [
      { team1: "ITC", score1: "", score2: "", team2: "Infosys" },
      { team1: "Globsync", score1: "0", score2: "5", team2: "Zomato" },
    ],
  },
  {
    group: "DAY 3 MATCHES, KNOCKOUT SEMIFINAL - BRONZE",
    matches: [
      { team1: "Capgemini", score1: "3", score2: "0", team2: "Genpact" },
      { team1: "TCS", score1: "7", score2: "1", team2: "Star TV" },
    ],
  },
  {
    group: "DAY 3 MATCHES, KNOCKOUT SEMIFINAL - GOLD",
    matches: [
      { team1: "Braithwaite", score1: "0", score2: "3", team2: "Infiflex" },
      { team1: "Ernst & Young(1)", score1: "0", score2: "0", team2: "Sunknowledge(3)" },
    ],
  },
  {
    group: "DAY 3 MATCHES, KNOCKOUT FINAL - BRONZE",
    matches: [
      { team1: "TCS(2)", score1: "0", score2: "0", team2: "Capgemini(0)" },
    ],
  },
  {
    group: "DAY 3 MATCHES, KNOCKOUT FINAL - SILVER",
    matches: [
      { team1: "Zomato", score1: "1", score2: "0", team2: "Infosys" },
    ],
  },
  {
    group: "DAY 3 MATCHES, KNOCKOUT FINAL - GOLD",
    matches: [
      { team1: "Sunknowledge(3)", score1: "0", score2: "0", team2: "Infiflex(2)" },
    ],
  },
];

const MatchTable = ({ group, matches }) => {
  return (
    <div className={styles["match-table"]}>
      <p className={styles["match-table-titles"]}>{group}</p>
      <table className={styles['tables']}>
        {/* <thead>
        <tr>
          <th className={styles["match-table-title"]}>{date}</th>
          <th></th>
          <th className={styles["match-table-title"]}>{group}</th>
          
        </tr>
      </thead> */}
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td className={styles["team"]}>{match.team1}</td>
              <td className={styles["score"]}>
                {match.score1}-{match.score2}
              </td>
              <td className={styles["team"]}>{match.team2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Matches = () => {
  return (
    <div className={styles['matches-section']}>
      {matchData.map((data, index) => (
        <MatchTable
          key={index}
          date={data.date}
          group={data.group}
          matches={data.matches}
        />
      ))}
    </div>
  );
};

export default Matches;
