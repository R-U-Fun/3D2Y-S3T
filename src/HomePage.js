import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import TicTacToe from './TicTacToe';
import TicTacToeBot from './TicTacToeBot';

export default function HomePage(){
    const [Bot, setBot] = useState(true);
    return(
        <div>
            <div className="container text-center">
                <div className="row gx-3 text-center justify-content-center">
                    <div className="col-lg-2  m-4 "><i class="bi bi-robot btn btn-dark btn-lg" onClick={() => setBot(!Bot)}></i></div>
                    <div className=" col-lg-6 rounded-4 border border-dark border-5">
                        <div className="card my-4 text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}} id="Box">
                            {Bot ? <TicTacToeBot /> : <TicTacToe />}
                        </div>
                    </div>
                    <div className="col-lg-2" ><a className="btn btn-dark m-4 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<TicTacToe />, document.getElementById('Box'))}>Super Tic-Tac-Toe Soon</a></div>
                </div>
                <div id="WIN"></div>
            </div>
            <br/><br/>
        </div>
    );
}