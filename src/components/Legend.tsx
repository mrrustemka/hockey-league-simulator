import React from "react";

function Legend() {
  return (
    <div className="legend">
      <h3 className="legend__header">Legend</h3>
      <div className="legend__column-one">
        <div>x - Clinched Playoff spot</div>
        <div>GP - Games Started</div>
        <div>W - Wins (worth two points)</div>
      </div>
      <div className="legend__column-two">
        <div>L - Losses (worth zero points)</div>
        <div>OT - OT/Shootout losses (worth one point)</div>
        <div>PTS - Points</div>
        <div>DIFF -Goal Differential</div>
      </div>
    </div>
  );
}

export default Legend;
