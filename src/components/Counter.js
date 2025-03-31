import React, { useState } from 'react';

const Button = () => {
    const [clicks, setClicks] = useState(0);

    //Handles increasing displayed Counter
    const handleIncrement = () => {
        setClicks(clicks + 1);
    }

    //Handles decreasing displayed Counter
    //Count is also prevented from going below zero
    const handleDecrement = () => {
        if (clicks != 0) {
            setClicks(clicks - 1);
        }
    }

    //Uses separate buttons to increase and decrease displayed count
    return (
        <div>
            <button onClick={handleIncrement}>Increase Count</button>
            <button onClick={handleDecrement}>Decrease Count</button>
            <p>Count Value: {clicks}</p>
        </div>
    );
};

export default Button;
