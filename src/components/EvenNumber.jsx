import React, { useMemo, useState } from "react";

export function EvenNumber(){
    const [number] = useState([1,2,3,4,5,6,7,8,9,10])

    const evenNumber = useMemo(() => {
        return number.filter(num => num % 2 === 0)
    }, [number])

    return(
        <>
        <h1>UseMemo example</h1>

        <p>The listed number {number}</p>

        <p>Even Number: {evenNumber.join(",")}</p>

        </>
    )
}
