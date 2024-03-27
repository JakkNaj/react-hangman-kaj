import React, { useState } from 'react';

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
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleFileLabelClick}
            style={{
                width: '100%',
                height: '200px',
                border: '2px dashed #ccc',
                textAlign: 'center',
                paddingTop: '80px',
                boxSizing: 'border-box',
                cursor: 'pointer',
            }}
        >
            <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                id="fileInput"
            />
            <label htmlFor="fileInput">Click here or drag and drop a file to import</label>
            {parsedData.length > 0 && (
                <div>
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
