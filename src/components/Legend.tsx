import '../styles/Legend.css';
function Legend() {
  return (
    <aside className='legend' aria-label='Standings legend'>
      <h3 className='legend__header'>Legend</h3>
      <dl className='legend__column-one'>
        <div><dt>x</dt><dd>Clinched Playoff Spot</dd></div>
        <div><dt>GP</dt><dd>Games Started</dd></div>
        <div><dt>W</dt><dd>Wins (Worth Two Points)</dd></div>
        <div><dt>L</dt><dd>Losses (Worth Zero Points)</dd></div>
        <div><dt>P%</dt><dd>Points Percentage</dd></div>
      </dl>
      <dl className='legend__column-two'>
        <div><dt>OT</dt><dd>OT/Shootout Losses (Worth One Point)</dd></div>
        <div><dt>PTS</dt><dd>Points</dd></div>
        <div><dt>DIFF</dt><dd>Goal Differential</dd></div>
        <div><dt>{'\u{1F525}'}</dt><dd>Hot Streak</dd></div>
        <div><dt>{'\u{1F9CA}'}</dt><dd>Cold Streak</dd></div>
      </dl>
    </aside>
  );
}

export default Legend;
