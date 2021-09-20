import React, { useState } from "react";
import { css } from '@emotion/react';

const Wave = () => {
    const [waves, setWaves] = useState(0);
    const label = `👋${waves} ${waves === 1 ? 'wave' : 'waves'}`;

    return (
        <button 
        css={css`
            background: #E6AF2E;
            color: #282F44;
            border: none; 
            font-size: 1.25rem;
            border-radius: 4px ;
            padding: 0.5rem
        `}
        onClick={() => setWaves(waves + 1)}
        >{label}</button>
    );
};

export default Wave;