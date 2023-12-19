import React from 'react';

function SelectInput({lableText, value, changeHandler, options=[]}) {
    return (
        <label>
            {lableText}
            <select value={value} onChange={changeHandler}>
                <option></option>
                {options.map((o)=>(
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default SelectInput;