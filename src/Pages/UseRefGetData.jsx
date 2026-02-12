import React, {useRef} from "react";

export function UseRefGetData() {
    const nameRef = useRef()

    function handleSubmit() {
        const value = nameRef.current.value
        alert("input value = " + value)
    }

    return (
        <>
        
        <input ref={nameRef} type="text" placeholder="Enter the value" />
        <button onClick={handleSubmit}>Get Data</button>
        
        </>
    )
}