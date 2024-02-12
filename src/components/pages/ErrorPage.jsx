import React from 'react';

function ErrorPage({errorMessages}) {
    return (
        <div className='container'>
            <h2>{errorMessages.length} errors have been detected in the file!</h2>
            <ul>
                {
                    errorMessages.map((message,index)=>
                        <li key={index}>{message}</li>)
                }
            </ul>
        </div>
    );
}

export default ErrorPage;