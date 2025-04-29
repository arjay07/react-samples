import React from 'react';
import TicTacToe from '../components/TicTacToe';

const TicTacToeView: React.FC = () => {
    return (
        <>
            <div className="referenceLink">
            <a className="btnLink" href="https://www.greatfrontend.com/interviews/study/gfe75/questions/user-interface/tic-tac-toe/react" target="_blank" rel="noopener noreferrer">
                Open Challenge on GreatFrontEnd: <span className="fw-bold">Tic Tac Toe</span>
            </a>
            </div>
            <TicTacToe/>
        </>
    );
};

export default TicTacToeView;