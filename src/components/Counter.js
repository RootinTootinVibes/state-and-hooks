import React, { useState } from 'react';

const Button = () => {
    const [clicks, setClicks] = useState(0);

<<<<<<< HEAD
    //Handles increasing displayed Counter
    const handleIncrement = () => {
        setClicks(clicks + 1);
    }

    //Handles decreasing displayed Counter
    //Count is also prevented from going below zero
    const handleDecrement = () => {
        if (clicks != 0) {
            setClicks(clicks - 1);
=======
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
>>>>>>> d9c31ae8beabfc2b369c513ca971d3360630ffc4
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
