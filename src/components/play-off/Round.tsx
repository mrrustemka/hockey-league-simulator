import React from 'react'

function Round({abv, pairs}: any) {
  return (
    <div>
      {abv}
      <div>
        {pairs.length === 0 ? 'waiting pairs...' : ''}
      </div>
    </div>
  )
}

export default Round