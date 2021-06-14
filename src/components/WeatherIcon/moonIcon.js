
import React from "react";

const MoonIcon = ({ cx, cy }) => {
    console.log('cx, cy', cx, cy);
    if (cx < 10) {
        cx += 15;
    }
    if (cx > 2450) {
        cx -= 15;
    }
    console.log('cx, cy edited', cx, cy);

    return (
        
        <svg width="30px" height='30px' data-testId='moon' xmlns="http://www.w3.org/2000/svg" version="1.1" x={cx - 15} y={cy - 50} viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
            <g>
                <g>
                    <g>
                        <path d="M525.3,989.5C241.2,989.5,10,758.3,10,474.1c0-196.8,109.6-373.6,285.9-461.4c7.9-3.9,17.5-2.4,23.7,3.8c6.2,6.2,7.9,15.8,4,23.7c-32.2,65.4-48.5,135.7-48.5,208.9c0,261.4,212.7,474.1,474.1,474.1c74,0,145-16.7,211-49.5c7.9-3.9,17.5-2.4,23.7,3.8c6.3,6.3,7.9,15.8,3.9,23.7C900.5,879,723.3,989.5,525.3,989.5z" />
                    </g>
                </g>
                <g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></g>
        </svg>
    )
}
export default MoonIcon;