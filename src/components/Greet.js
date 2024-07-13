import React from "react";

export function Greet(props) {
        console.log(props);
    return <h1> 
        hello nikesh {props.name}
        <div>{props.children}</div>
    </h1>;
};

// export const Greet = () => <h1>hello nikesh</h1>;