import {getSecret} from "./secretManager";
import React from "react";
import ReactDOM from 'react-dom';

const test_secret = getSecret();
console.log(test_secret);

ReactDOM.render(
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <h1> {test_secret} </h1>
    </div>,
    document.getElementById('root')
);
