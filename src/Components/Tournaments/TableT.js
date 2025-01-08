import React from "react";


const data = {
  groupA: [
    { pos: 1, team: "TCS", played: "7*", won: 9, draw: 0, lost: 0, gf: 13, ga: 0, gd: 17, points: 21 },
    { pos: 2, team: "CAPGEMINI", played: "7*", won: 5, draw: 1, lost: 1, gf: 8, ga: 1, gd: 15, points: 16 },
    { pos: 3, team: "ABP DIGITAL", played: "7*", won: 4, draw: 2, lost: 1, gf: 2, ga: 5, gd: 8, points: 14 },
    { pos: 4, team: "ERICSSON", played: "7*", won: 2, draw: 3, lost: 2, gf: 2, ga: 4, gd: 7, points: 9 },
    { pos: 5, team: "GENPACT", played: "3^", won: 1, draw: 2, lost: 4, gf: 2, ga: 2, gd: 9, points: 5 },
    { pos: 6, team: "GLOBSYNC", played: "3^", won: 1, draw: 2, lost: 4, gf: 1, ga: 1, gd: 9, points: 5 },
    { pos: 7, team: "SIEMENS", played: "3^", won: 0, draw: 0, lost: 3, gf: 0, ga: 15, gd: 8, points: 0 },
    { pos: 8, team: "STAR TV", played: "0^", won: 0, draw: 0, lost: 7, gf: 0, ga: 0, gd: 7, points: 0 },
  ],
  groupB: [
    { pos: 1, team: "INFLEX", played: "7*", won: 6, draw: 1, lost: 0, gf: 15, ga: 0, gd: 15, points: 19 },
    { pos: 2, team: "SUNKNOWLEDGE", played: "7*", won: 5, draw: 2, lost: 0, gf: 13, ga: 0, gd: 13, points: 17 },
    { pos: 3, team: "BRAITHWAITE", played: "7*", won: 2, draw: 3, lost: 2, gf: 2, ga: 9, gd: -7, points: 9 },
    { pos: 4, team: "ERNST & YOUNG", played: "7*", won: 1, draw: 5, lost: 1, gf: 0, ga: 3, gd: -3, points: 8 },
    { pos: 5, team: "INFOSYS", played: "7*", won: 1, draw: 4, lost: 2, gf: 3, ga: 6, gd: -3, points: 7 },
    { pos: 6, team: "ZOMATO", played: "7*", won: 1, draw: 4, lost: 2, gf: 0, ga: 4, gd: -4, points: 7 },
    { pos: 7, team: "ITC", played: "7*", won: 1, draw: 2, lost: 4, gf: 0, ga: 10, gd: -10, points: 5 },
    { pos: 8, team: "INCOME TAX", played: "4^", won: 0, draw: 1, lost: 6, gf: 1, ga: 2, gd: -1, points: 1 },
  ],
};

const Table = ({ group, data }) => {
  return (
    <div className="table-container">
      <h2>{group}</h2>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Draw</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.pos}</td>
              <td>{row.team}</td>
              <td>{row.played}</td>
              <td>{row.won}</td>
              <td>{row.draw}</td>
              <td>{row.lost}</td>
              <td>{row.gf}</td>
              <td>{row.ga}</td>
              <td>{row.gd}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableT = () => {
  return (
    <div >
      <Table group="GROUP A" data={data.groupA} />
      <Table group="GROUP B" data={data.groupB} />
    </div>
  );
};

export default TableT;
