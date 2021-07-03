import React from 'react';
import '../styles/joblisting.css';

function JobListing({ data }) {
    return (
        <div >
            {data.length > 0
                ?
                data.map(job => {
                    return (
                        <div className='card' key={job.id}>
                            <div className='job-type'>
                                <div className='company-logo-div'>
                                    <img src={job.logo} alt='company logo' />
                                </div>
                                <div className='job-listing-div'>
                                    <p>{job.companyName}
                                        {job.newPost && <span className='new-badge'>NEW</span>}
                                    </p>
                                    <p>{job.jobType}
                                        <span className='timestamp'> {job.timestamp}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='job-tag'>
                                {job.jogTags.map((tag, index) => {
                                    return (
                                        <p key={index}>{tag}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                :
                <p style={{ textAlign: 'center' }}>No Jobs to display</p>
            }
        </div>
    )
}

export default JobListing;
