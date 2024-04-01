import React, {useContext, useState} from 'react';
import FileImporter from './FileImporter';
import './ChooseData.css';
import {GlobalContext} from "./GlobalContext";

const ChooseData = () => {
    const [toggleState, setToggleState] = useState(true);

    const { dataLoaded, setDataLoaded, useCustomData, setUseCustomData } = useContext(GlobalContext);

    const handleToggleChange = () => {
        setToggleState(!toggleState);
        setUseCustomData(!useCustomData);
        setDataLoaded(!dataLoaded);
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
