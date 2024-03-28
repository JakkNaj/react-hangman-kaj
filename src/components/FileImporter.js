import React from 'react';
import './FileImporter.css';

const FileImporter = ({ onData }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        readFileContent(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        readFileContent(file);
    };

    const readFileContent = (file) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const content = event.target.result;
            parseFileContent(content);
        };

        reader.readAsText(file);
    };

    const parseFileContent = (content) => {
        const lines = content.split('\n').map(line => line.trim());
        alert("sending data from FileImporter to ChooseData");
        onData(lines);
    };

    const handleFileLabelClick = (e) => {
        e.preventDefault();
        document.getElementById('fileInput').click();
    };

    return (
        <div
            className="file-importer-container"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <input
                type="file"
                className="file-input"
                onChange={handleFileChange}
                id="fileInput"
            />
            <label htmlFor="fileInput" className="file-label" onClick={handleFileLabelClick}>
                Click here or drag and drop a file to import
            </label>
        </div>
    );
};

export default FileImporter;
