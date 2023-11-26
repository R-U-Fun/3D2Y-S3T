import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import TicTacToe from './TicTacToe';

export default function HomePage(){
    return(
        <div>
            <div className="container text-center">
                <div className="row gx-3 text-center justify-content-center">
                    <div className=" col-lg-6 rounded-4 border border-dark border-5">
                        <div className="card my-4 text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}} id="Box">
                            <TicTacToe />
                        </div>
                    </div>
                </div>
                <div id="WIN"></div>
            </div>
            <br/><br/>
        </div>
    );
}