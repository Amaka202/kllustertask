import React, { useState } from 'react'
import JobListing from './JobListing'
import Search from './Search'
import '../styles/jobpage.css'
import { jobData } from "./data";

function JobPage() {
    const [searchWord, setSearchWord] = useState('');

    const filteredJob = jobData.filter(job => {
        return job.jobType.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
    })


    return (
        <div className='job-page-container'>
            <Search searchWord={searchWord} setSearchWord={setSearchWord} />
            <JobListing data={filteredJob} />
        </div>
    )
}

export default JobPage;
