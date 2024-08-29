import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Round from './Round';
import { Schedule } from '../../data/types';
import { v4 as uuidv4 } from "uuid";
import { teams as mock } from "../../data/teams";


function PlayOff() {
    const location = useLocation();
    // const { teams } = location.state || {};
    const teams = mock;
    const tree = Array.from({ length: Math.log2(teams.length) }, () => []);
    
    for (let i = 0; i < teams.length / 2; i++) {
    }

    console.log(tree)

  return (
    <div>
        {tree.map((value, index) => <Round key={uuidv4()} abv={index === Math.log2(teams.length) - 1 ? 'Final' : 'Round ' + (index + 1) } pairs={[]}/>)}
    </div>
  )
}

export default PlayOff