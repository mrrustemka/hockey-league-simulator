import { useEffect } from 'react';
import { champs } from '../data/champs';
import Header from './Header';
import League from './League';
import '../styles/Start.css';

function Start() {
  useEffect(() => {
    document.title = 'Hockey Simulator - Home';
  }, []);
  return (
    <>
      <Header id='' />
      <div className='start'>
        {champs.map((champ) => (
          <League key={champ.id} league={champ} />
        ))}
      </div>
    </>
  );
}

export default Start;
