import React from 'react';

function ErrorPage({errorMessages}) {
    return (
        <div>
            <h2>Error count : {errorMessages.length}</h2>
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