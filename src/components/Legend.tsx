import '../Styles/Legend.css';
function Legend() {
  return (
    <div className='legend'>
      <h3 className='legend__header'>Legend</h3>
      <div className='legend__column-one'>
        <div>x - Clinched Playoff Spot</div>
        <div>GP - Games Started</div>
        <div>W - Wins (Worth Two Points)</div>
        <div>L - Losses (Worth Zero Points)</div>
        <div>P% - Points Percentage</div>
      </div>
      <div className='legend__column-two'>
        <div>OT - OT/Shootout Losses (Worth One Point)</div>
        <div>PTS - Points</div>
        <div>DIFF - Goal Differential</div>
        <div>{'\u{1F525}'} - Hot Streak</div>
        <div>{'\u{1F9CA}'} - Cold Streak</div>
      </div>
    </div>
  );
}

export default Legend;
