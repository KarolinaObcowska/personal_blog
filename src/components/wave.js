import React, { useState } from 'react'
import { css } from '@emotion/react'

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋${waves} ${waves === 1 ? 'wave' : 'waves'}`

  return (
    <button
      css={css`
        background: #e6af2e;
        color: #282f44;
        border: none;
        font-size: 1.25rem;
        border-radius: 4px;
        padding: 0.5rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}

export default Wave
