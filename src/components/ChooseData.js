import React, { useState } from 'react';
import FileImporter from './FileImporter';
import './ChooseData.css';

const ChooseData = ({ handleChooseData }) => {
    const [toggleState, setToggleState] = useState(true);

    const handleToggleChange = () => {
        setToggleState(!toggleState);
    };

    return (
        <div className="choose-data-container">
            <h3>Choose Data</h3>
            <div className="toggle-switch-container">
                <input
                    type="checkbox"
                    id="toggle-switch"
                    className="toggle-switch-checkbox"
                    checked={toggleState}
                    onChange={handleToggleChange}
                />
                <label className="toggle-switch" htmlFor="toggle-switch">
                    <span className="toggle-switch-inner"></span>
                </label>
                <span className="toggle-switch-label">
                    {toggleState ? 'Dictionary' : 'Own Data'}
                </span>
            </div>

            {!toggleState && (<FileImporter />)}
        </div>
    );
};

export default ChooseData;
