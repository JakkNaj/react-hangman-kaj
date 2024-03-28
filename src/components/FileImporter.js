import React, { useState } from 'react';
import './FileImporter.css'; // Import CSS file for styling

const FileImporter = () => {
    const [fileContent, setFileContent] = useState(null);
    const [parsedData, setParsedData] = useState([]);

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
            setFileContent(content);
            parseFileContent(content);
        };

        reader.readAsText(file);
    };

    const parseFileContent = (content) => {
        const lines = content.split('\n').map(line => line.trim());
        setParsedData(lines);
    };

    const handleFileLabelClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div
            className="file-importer-container"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleFileLabelClick}
        >
            <input
                type="file"
                className="file-input"
                onChange={handleFileChange}
                id="fileInput"
            />
            <label htmlFor="fileInput" className="file-label">
                Click here or drag and drop a file to import
            </label>
            {parsedData.length > 0 && (
                <div className="parsed-data">
                    <h3>Parsed Data:</h3>
                    <ul>
                        {parsedData.map((word, index) => (
                            <li key={index}>{word}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileImporter;
