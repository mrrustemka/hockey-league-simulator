import React from 'react'

function Pair({teams}: any) {
  return (
    <div>
      {teams[0].abbreviation} - {teams[1].abbreviation}
    </div>
  )
}

export default Pair