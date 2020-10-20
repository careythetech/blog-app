import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function PoliticsList() {
    const [politic, setPolitic] = useState([]);
    useEffect(() => {
        axios.get('/api/politic/')
            .then(res => { setPolitic(res.data) })
            .catch(error => console.log(error))
    }, []);

    const deleteItem = (id) => {
        axios.delete(`/api/politic/${id}`)
        .then(res => { window.location = '/politicsList' })
    };


    const renderList = () => politic && politic.map(item => (
        <div key={item._id} className='list'>
            <h3>{item.title}</h3>
            <h5>{item.authorname}</h5>
            <p>{item.description}</p>
            <p>{item.date}</p>
            <Link to='/addPolitic' >ADD POLITICS NEWS</Link>
            <Link to={{ pathname: '/addPolitic',
                aboutProps: { title: item.title, authorname: 
                item.authorname, date: item.date, id: item._id, description:item.description } }} >EDIT SPORTS NEWS </Link>
                <button onClick={() => deleteItem(item._id)}>DELETE NEWS</button>
        </div>
    ));
    return (
        <div>
            <h1>POLITICS NEWS</h1>
            {renderList()}
        </div>
    );
};
export default PoliticsList;