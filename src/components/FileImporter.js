import React, {useContext, useState} from 'react';
import './FileImporter.css';
import {GlobalContext} from "./GlobalContext";

const FileImporter = () => {

    const [importStatus, setImportStatus] = useState(null);

    const { setData } = useContext(GlobalContext);

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
        try {
            const parsedContent = JSON.parse(content);
            if (parsedContent.data && Array.isArray(parsedContent.data)) {
                setData(parsedContent.data);
                setImportStatus({ success: true, message: "Data successfully loaded" });
            } else {
                setImportStatus({ success: false, message: "Failed to parse JSON content. The 'data' attribute is missing or is not an array." });
            }
        } catch (error) {
            setImportStatus({ success: false, message: "Failed to parse JSON content. Please make sure the file is a valid JSON file and try again." });
        }
    };

    const handleFileLabelClick = (e) => {
        e.preventDefault();
        document.getElementById('fileInput').click();
    };

    return (
        <div>
            {importStatus && (
                <div className={`import-status ${importStatus.success ? 'success' : 'error'}`}>
                    {importStatus.success ? <i className="fas fa-check-circle"></i> :
                        <i className="fas fa-exclamation-circle"></i>}
                    {importStatus.message}
                </div>
            )}
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
                    accept=".json"
                />
                <label htmlFor="fileInput" className="file-label" onClick={handleFileLabelClick}>
                    Click here or drag and drop a .json (with data attribute) file to import
                </label>
            </div>
        </div>
    );
};

export default FileImporter;