import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function SportsList() {
    const [sport, setSport] = useState([]);
    useEffect(() => {
        axios.get('/api/sport/')
            .then(res => { setSport(res.data) })
            .catch(error => console.log(error))
    }, []);

    const deleteItem = (id) => {
        axios.delete(`/api/sport/${id}`)
        .then(res => { window.location = '/sportsList' })
    };


    const renderList = () => sport && sport.map(item => (
        <div key={item._id} className='list'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h5>{item.authorname}</h5>
            <p>{item.date}</p>
            <Link to='/addSport' >ADD SPORTS NEWS </Link>
            <Link to={{ pathname: '/addSport',
                aboutProps: { title: item.title, authorname: 
                item.authorname, date: item.date, id: item._id } }} >EDIT SPORTS NEWS </Link>
                <button onClick={() => deleteItem(item._id)}>DELETE NEWS</button>
        </div>
    ));
    return (
        <div>
            <h1>SPORTS NEWS</h1>
            {renderList()}
        </div>
    );
};
export default SportsList;