import React from 'react';

import styles from "./Tournaments.module.css"

const Guidelines = () => {
  return (
    <div className={styles['o-container']}>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>MATCH DURATION</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          Group League Matches: 10 minutes each half with a 4-minute halftime interval.
          </li>
          <li className={styles['o-listItem']}>
          Knockout Matches: 15 minutes each half with a 6-minute halftime interval.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>TEAM COMPOSITION</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          The tournament accommodates a maximum of 24 participating teams.
          </li>
          <li className={styles['o-listItem']}>
          Each team may register up to 11 players, with 7 players on the field and 4 as substitutes.
          </li>
          <li className={styles['o-listItem']}>
          Unlimited substitutions are permitted in all matches.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>TOURNAMENT PROGRESSION</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          24 teams will be divided into 4 groups, with 6 teams in each group.
          </li>
          <li className={styles['o-listItem']}>
          Each team will play one game against all opponents in their respective groups.
          </li>
          <li className={styles['o-listItem']}>
          After 5 group stage matches, teams will be segregated based on group standings.
          </li>
          <li className={styles['o-listItem']}>
          Group standings will be based on points.
          </li>
          <li className={styles['o-listItem']}>
          Scoring: Win = 3 points, Draw = 1 point, Loss = 0 points
          </li>
          <li className={styles['o-listItem']}>
          In case of equal points, goal difference will determine position.

          </li>
          <li className={styles['o-listItem']}>
          In case of equal goal difference, head-to-head result will be considered.
          </li>
          <li className={styles['o-listItem']}>
          If all above factors does not determine standing then more goals scored followed by least goal conceded will be considered.
          </li>
          <li className={styles['o-listItem']}>
          If needed, a spot-kick shootout will determine final positions.
          </li>
          <li className={styles['o-listItem']}>
          Knockout stage will consist of 8 teams in each of three categories: Gold, Silver, and Bronze.
          </li>
          <li className={styles['o-listItem']}>
          The top 2 teams from each group will qualify for the Gold Plate, the middle 2 for the Silver Plate, and the bottom 2 for the Bronze Plate.
          </li>
          <li className={styles['o-listItem']}>
          The knockout stage will include Quarterfinals, Semifinals, and Final matches (no third-place matches).
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>PLAYING RULES</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          Goalkeeper distribution and area rules follow those of 11-a-side football.
          </li>
          <li className={styles['o-listItem']}>
          The back pass rule applies, resulting in an indirect free kick to the attacking team from the spot where the offence took place.
          </li>
          <li className={styles['o-listItem']}>
          Goals can be scored directly from kick-off.
          </li>
          <li className={styles['o-listItem']}>
          There are NO OFFSIDES.

          </li>
          <li className={styles['o-listItem']}>
          Instead of throw-ins, the ball will be kicked-in if it goes out of touchline.

          </li>
          <li className={styles['o-listItem']}>
          Two referees will officiate each match and a third official will oversee the match from outside the playing area.

          </li>
          <li className={styles['o-listItem']}>
          Unlimited rolling substitutions without stopping play, but all players must have the 3rd official’s permission to enter the field.
          
          </li>
          <li className={styles['o-listItem']}>
          FIFA guidelines will apply for all other rules.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>PENALTY AREA 'D-BOX'</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          Players are allowed inside the penalty area.
          </li>
          <li className={styles['o-listItem']}>
          The goalkeeper is allowed to come out of the penalty area.
          </li>
          <li className={styles['o-listItem']}>
          Goals can be scored from inside the penalty area.
          </li>
          <li className={styles['o-listItem']}>
          Offenses by defending players in the penalty area will result in penalty kicks.
          </li>
          <li className={styles['o-listItem']}>
          Runup for penalty cannot be more than 2 yards.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>FOULS AND MISCONDUCT</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          The referee will address all fouls and misconduct appropriately.

          </li>
          <li className={styles['o-listItem']}>
          Sliding tackles are permitted within the laws of the game.

          </li>
          <li className={styles['o-listItem']}>
          All free kicks are direct, and the defending team must retreat at least 3 yards from the ball.

          </li>
          <li className={styles['o-listItem']}>
          Any sort of retaliation after foul will result in straight red card. • The use of offensive and vulgar language is forbidden, and the referee may impose severe penalties on any player who engages in such behaviour.

          </li>
          <li className={styles['o-listItem']}>
          Intentional violence may result in team disqualification based on the referee’s report and organizer’s decision.

          </li>
          <li className={styles['o-listItem']}>
          Caution details are reported to the coordinator after each game.

          </li>
          <li className={styles['o-listItem']}>
          Verbal Warning

          </li>
          <li className={styles['o-listItem']}>
          1st Offense: Yellow Card

          </li>
          <li className={styles['o-listItem']}>
          2nd Yellow Card in a game = Red Card – player is expelled from the game

          </li>
          <li className={styles['o-listItem']}>
          3 yellow cards in group stage or knockout result in a suspension for the next match.
          
          </li>
          <li className={styles['o-listItem']}>
          Straight Red Cards: Player is expelled from the game and suspended for the next match.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>TEAM KIT</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          All 11 players must wear kits provided by the organizers during the captains’ meet.

          </li>
          <li className={styles['o-listItem']}>
          Shin guards are mandatory; players without them will participate at their own risk.

          </li>
          <li className={styles['o-listItem']}>
          Footwear: Rubber/plastic studs or soles are permitted; metal studs are prohibited.
          
          </li>
          <li className={styles['o-listItem']}>
          No accessories such as rings, earrings, bangles, or necklaces are allowed on the field; improperly kitted players may be replaced by the referee.
          </li>
        </ul>
      </section>
      <br/>
      <section className={styles['o-section']}>
        <h2 className={styles['o-sectionTitle']}>PRIZES AND AWARDS: Team Awards</h2>
        <ul className={styles['o-list']}>
          <li className={styles['o-listItem']}>
          Trophies for winners and runners-up in all three categories (Gold, Silver, and Bronze).

          </li>
          <li className={styles['o-listItem']}>
          Fair Play award for the most disciplined team. Individual Awards
          
          </li>
          <li className={styles['o-listItem']}>
          Best Player, Goalkeeper, and Highest Goal Scorer.
          </li>
        </ul>
      </section>
      <br/>
    </div>
  );
};

export default Guidelines;