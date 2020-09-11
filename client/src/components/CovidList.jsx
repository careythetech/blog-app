import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function CovidList() {
    const [covid, setCovid] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3002/api/covid/')
            .then(res => { setCovid(res.data) })
            .catch(error => console.log(error))
    }, []);

    const deleteItem = (id) => {
        axios.delete(`http://localhost:3002/api/covid/${id}`)
        .then(res => { window.location = '/covidsList' })
    };


    const renderList = () => covid && covid.map(item => (
        <div key={item._id} className='list'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h5>{item.authorname}</h5>
            <p>{item.date}</p>
            <button onClick={() => deleteItem(item._id)}>delete item</button>
            <Link to='/addCovid' >Add Covid News </Link>
            <Link to={{ pathname: '/addCovid',
                aboutProps: { title: item.title, authorname: 
                item.authorname, date: item.date, id: item._id } }} >Edit Sport </Link>
        </div>
    ));
    return (
        <div>
            <h1>Covid News</h1>
            {renderList()}
        </div>
    );
};
export default CovidList;