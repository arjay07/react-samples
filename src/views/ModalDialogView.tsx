import React from 'react';
import ModalDialog from '../components/ModalDialog';

const TicTacToeView: React.FC = () => {
    return (
        <>
            <div className="referenceLink">
            <a className="btnLink" href="https://www.greatfrontend.com/interviews/study/gfe75/questions/user-interface/modal-dialog/react" target="_blank" rel="noopener noreferrer">
                Open Challenge on GreatFrontEnd: <span className="fw-bold">Modal Dialog</span>
            </a>
            </div>
            <ModalDialog/>
        </>
    );
};

export default TicTacToeView;