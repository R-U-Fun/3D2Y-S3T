import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useState} from 'react';

function XorO(props){
    if(props.XorO){
        return(<i class="bi bi-x-lg btn btn-dark btn-lg"></i>);
    }
    else{
        return(<i class="bi bi-circle btn btn-dark btn-lg"></i>);
    }
}

export default function TicTacToe(){

    const [Player, setPlayer] = useState(true);

    const [R1C1, setR1C1] = useState();
    const [R1C2, setR1C2] = useState();
    const [R1C3, setR1C3] = useState();
    const [R2C1, setR2C1] = useState();
    const [R2C2, setR2C2] = useState();
    const [R2C3, setR2C3] = useState();
    const [R3C1, setR3C1] = useState();
    const [R3C2, setR3C2] = useState();
    const [R3C3, setR3C3] = useState();

    if(
        (R1C1===true && R1C2===true && R1C3===true) ||
        (R2C1===true && R2C2===true && R2C3===true) ||
        (R3C1===true && R3C2===true && R3C3===true) ||

        (R1C1===true && R2C1===true && R3C1===true) ||
        (R1C2===true && R2C2===true && R3C2===true) ||
        (R1C3===true && R2C3===true && R3C3===true) ||

        (R1C1===true && R2C2===true && R3C3===true) ||
        (R1C3===true && R2C2===true && R3C1===true) ||


        (R1C1===false && R1C2===false && R1C3===false) ||
        (R2C1===false && R2C2===false && R2C3===false) ||
        (R3C1===false && R3C2===false && R3C3===false) ||

        (R1C1===false && R2C1===false && R3C1===false) ||
        (R1C2===false && R2C2===false && R3C2===false) ||
        (R1C3===false && R2C3===false && R3C3===false) ||

        (R1C1===false && R2C2===false && R3C3===false) ||
        (R1C3===false && R2C2===false && R3C1===false)
    ){
        alert("WIN");
    }
        
                        console.log("Player = "+Player);
    return(
        <div>
            <a className="btn btn-dark m-2 fs-2 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<TicTacToe />, document.getElementById('Box'))}>Tic-Tac-Toe</a>
            <br/><br/>
            <div className="container border border-dark border-5">
                <div className="row m-2"></div>
                <div className="row m-2">
                    <div id="R1C1" className="col">
                    <div onClick={() => {
                        setR1C1(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R1C1'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                    <div id="R1C2" className="col">
                    <div onClick={() => {
                        setR1C2(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R1C2'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                    <div id="R1C3" className="col">
                    <div onClick={() => {
                        setR1C3(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R1C3'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div id="R2C1" className="col">
                    <div onClick={() => {
                        setR2C1(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R2C1'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                    <div id="R2C2" className="col">
                    <div onClick={() => {
                        setR2C2(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R2C2'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                    <div id="R2C3" className="col">
                    <div onClick={() => {
                        setR2C3(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R2C3'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div id="R3C1" className="col">
                    <div onClick={() => {
                        setR3C1(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R3C1'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                    <div id="R3C2" className="col">
                    <div onClick={() => {
                        setR3C2(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R3C2'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                    <div id="R3C3" className="col">
                    <div onClick={() => {
                        setR3C3(!Player);
                        setPlayer(!Player);
                        ReactDOM.render(<XorO XorO={Player}/>, document.getElementById('R3C3'));
                    }}>
                        <i className="bi bi-square  btn btn-dark btn-lg"></i>
                    </div>
                    </div>
                </div>
                <div className="row m-2"></div>
            </div>
            <br/><br/>
            <a className="btn btn-dark m-4 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<TicTacToe />, document.getElementById('Box'))}>Super Tic-Tac-Toe Soon</a>
        </div>
    );
}