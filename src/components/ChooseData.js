import React, { useState } from 'react';
import FileImporter from './FileImporter';

const ChooseData = ({ handleChooseData }) => {
    const [showFileImporter, setShowFileImporter] = useState(false);

    const handleOwnDataClick = () => {
        setShowFileImporter(true);
    };

    const handleOnlineDictionaryClick = () => {
        handleChooseData();
    };

    const closeModal = () => {
        setShowFileImporter(false);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Choose Data</h2>
            <button onClick={handleOwnDataClick}>Own Data</button>
            <button onClick={handleOnlineDictionaryClick}>Online English Dictionary</button>

            {showFileImporter && (
                <div className="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <FileImporter />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChooseData;
