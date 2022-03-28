import React from 'react';

const ColoredLineWhite = (
    <hr
        style={{
            color: "white"
        }}
    />
);

const ColoredLineBlack = ({ color }) => (
    <hr
        style={{
            color: color
        }}
    />
);

export default ColoredLineWhite;