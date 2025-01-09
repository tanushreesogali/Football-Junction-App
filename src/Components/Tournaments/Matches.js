import React from "react";
import styles from "./Tournaments.module.css";

const matchData = [
  {
    date: "Saturday, 21 December 2024",
    group: "GROUP A",
    matches: [
      { team1: "MIND TREE", score1: "2", score2: "2", team2: "ERICSSON" },
      { team1: "TCS", score1: "3", score2: "2", team2: "WIPRO" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
    ],
  },
  {
    date: "Saturday, 21 December 2024",
    group: "GROUP B",
    matches: [
      { team1: "MIND TREE", score1: "2", score2: "2", team2: "ERICSSON" },
      { team1: "TCS", score1: "3", score2: "2", team2: "WIPRO" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
      { team1: "MIND TREE", score1: "3", score2: "2", team2: "ERICSSON" },
    ],
  },
];

const MatchTable = ({ date, group, matches }) => {
  return (
    <div className={styles["match-table"]}>
      <table className={styles['tables']}>
        <thead>
        <tr>
          <th className={styles["match-table-title"]}>{date}</th>
          <th></th>
          <th className={styles["match-table-title"]}>{group}</th>
          
        </tr>
      </thead>
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
