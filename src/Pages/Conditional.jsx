import React from "react";

export function Conditional() {
    const name = "Anas"
    const pass = "anas@123"
    
    if(name==="Anas"&& pass==="anas@123")
    {
        return <h1>Welcome `back`</h1>
    }
    else{
        return <h1>Please in login</h1>
    }
}