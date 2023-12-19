import React from 'react';
import './Input.css';

function FileInput({type="file", handleChange}) {
    return (
        <input className="uploadFile" type={type} onChange={handleChange}/>
    );
}

export default FileInput;