import React from 'react'

const Articles = () => {
    return (
        <div className='cards'>
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Covid 19 News</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/covidsList" className="btn1">Click Here For News</a>
                </div>
            </div>
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Politics</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/politicsList" className="btn1">Click Here For News</a>
                </div>
            </div>
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Sports</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="sportsList" className="btn1">Click Here For News</a>
                </div>
            </div>
        </div>
    )
}
export default Articles