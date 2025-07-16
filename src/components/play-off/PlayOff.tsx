import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Champion from './Champion';
import { champs } from '../../data/champs';
import { League, Teams } from '../../data/types';
import Header from '../Header';
import Round from './Round';
import '../../styles/PlayOff.css';

function PlayOff() {
  const [isRound, setIsRound] = useState<boolean>(true);
  let [curRound, setCurRound] = useState<number>(0);
  const [tree, setTree] = useState<Array<Teams[][]>>([]);
  const [teams, setTeams] = useState<Array<Teams>>(
    JSON.parse(localStorage.getItem('playoffList') || '[]')
  );
  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '');
  const [isChampion, setIsChampion] = useState<boolean>(false);
  const playoffWinsRequiredCount =
    champs.find((champ: League) => champ.id === leagueId)
      ?.playoff_wins_required_count ?? 4;

  for (let i = 0; i < teams.length; i++) {
    teams[i].play_off_rank = i + 1;
  }

  if (isRound) {
    let newRound: Array<Teams[]> = [];

    for (let i = 0; i < teams.length / 2; i++) {
      newRound.push([teams[i], teams[teams.length - i - 1]]);
    }

    setTree((prevTree) => [newRound, ...prevTree]);
    setCurRound(curRound + 1);
    setIsRound(!isRound);
  }

  function nextRound() {
    const newTeams = teams.filter(
      (team) => team.play_off_round_wins === playoffWinsRequiredCount
    );
    if (newTeams.length !== teams.length / 2) {
      console.log('Please simulate all games before go to the next round');
      return;
    }
    if (newTeams.length < 2) {
      setIsChampion(!isChampion);
    } else {
      setIsRound(!isRound);
      newTeams.forEach((team) => (team.play_off_round_wins = 0));
    }
    setTeams(newTeams);
  }

  return (
    <div className='playoff'>
      <Header id={leagueId} />
      {isChampion ? (
        <Champion champion={teams[0]} />
      ) : (
        <div className='playoff__rounds'>
          {tree.map((value, index) => (
            <div className='playoff__round' key={uuidv4()}>
              <Round
                abv={'Round ' + (tree.length - index)}
                pairs={value}
                status={index === 0}
                updateRound={nextRound}
                playoffWinsRequiredCount={playoffWinsRequiredCount}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayOff;
