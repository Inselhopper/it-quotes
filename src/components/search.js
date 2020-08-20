import React, { useEffect, useRef } from 'react';

export function Search({searchValue, setSearchValue}) {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
        }, []//We want that code to run only once, so we'll pass an empty array of dependencies to the useEffect.

    )

    function handleChange(event) {
        setSearchValue(event.target.value);
    }
    return (
        <div className="ui inverted segment">
            <div className="ui input">
                <input
                    ref ={inputRef}
                    type="text"
                    placeholder="Search for a quote"
                    value={searchValue}
                    onChange = {handleChange}

                />
            </div>
        </div>
    )
}