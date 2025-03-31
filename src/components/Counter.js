import React, { useState } from 'react';

const Button = () => {
    const [clicks, setClicks] = useState(0);

    //handles both increase and decrease count 
    const handleChange = (direction) => {
        
        if (direction = "increase") {
            //handling increase
            setClicks(clicks + 1);
        } else {
            //handling decrease
            if (clicks >= 0) {
                setClicks(clicks - 1);
            }
        }
    }

    //Uses separate buttons to increase and decrease displayed count
    return (
        <div>
            <button onClick={handleChange("increase")}>Increase Count</button>
            <button onClick={handleChange("decrease")}>Decrease Count</button>
            <p>Count Value: {clicks}</p>
        </div>
    );
};

export default Button;
