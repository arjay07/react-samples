import React from 'react';

const apiBaseUrl = 'https://hacker-news.firebaseio.com/v0';

interface JobStory {
    by: string;
    id: number;
    score: number;
    time: number;
    type: string;
    url: string;
};

const fetchJobs = async (): Promise<JobStory[]> => {

    try {
        const storiesRes = await fetch(`${apiBaseUrl}/jobstories.json`);
        const itemIds: number[] = await storiesRes.json();
        
        const allJobs = itemIds.map(async (id) => ((await fetch(`${apiBaseUrl}/item/${id}`)).json()));

    } catch(err) {
        console.error(err);
    }

    return [];
}


const JobBoard: React.FC = () => {
    return (
        <div>
            <h1>Job Board</h1>
            <p>No jobs available at the moment.</p>
        </div>
    );
};

export default JobBoard;