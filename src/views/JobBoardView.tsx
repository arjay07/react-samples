import React from 'react';
import JobBoard from '../components/JobBoard';

const JobBoardView: React.FC = () => {
    return (
        <>
            <div className="referenceLink">
            <a className="btnLink" href="https://www.greatfrontend.com/interviews/study/gfe75/questions/user-interface/job-board/react" target="_blank" rel="noopener noreferrer">
                Open Challenge on GreatFrontEnd: <span className="fw-bold">Job Board</span>
            </a>
            </div>
            <JobBoard/>
        </>
    );
};

export default JobBoardView;