import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function NumberInARowInput(props) {
    return (
        <div className="inputArea">
            <span>Number in a Row to Win:</span>
            &nbsp;
            <NumberDropdown defaultValue={props.currentNumber} min={4} max={8} />
        </div>
    )
}

NumberInARowInput.defaultProps = {
    currentNumber: React.PropTypes.number.isRequired
};


export default NumberInARowInput;