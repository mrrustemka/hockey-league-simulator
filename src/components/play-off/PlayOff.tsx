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

    let tree = Array.from({ length: Math.log2(teams.length) }, () => []);
    // for (let i = 0; i < teams.length / 2; i++) {
    //     tree.push([teams[i], teams[teams.length - i - 1]])
    // }
    console.log(tree)

  return (
    <div>
        {tree.map((value, index) => <Round key={uuidv4()} abv={index + 1} />)}
    </div>
  )
}

export default PlayOff