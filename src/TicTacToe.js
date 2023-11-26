import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useState, useRef } from 'react';

function Square() {
    return (
        <i className="bi bi-square"></i>
    );
}

function Row(){
    return(
        <div className="row">
            <div className="col">
                <Square />
            </div>
            <div className="col">
                <Square />
            </div>
            <div className="col">
                <Square />
            </div>
        </div>
    );
}

export default function TicTacToe(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    return(
        <div>
            <a className="btn btn-dark m-4 fs-2 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<TicTacToe />, document.getElementById('Box'))}>Tic-Tac-Toe</a>
            <br/><br/><br/><br/>
            <div className="container">
                <Row />
                <Row />
                <Row />
            </div>
            <br/><br/><br/><br/><br/>
        </div>
    );
}