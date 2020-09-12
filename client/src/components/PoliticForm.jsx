import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CovidForm = (props) => {

    const [politicData, setPoliticData] = useState({
        title: '',
        description: '',
        authorname: '',
        date: ''
    });
    const [editData, setEditData] = useState({})

    const handleChange = e => {
        setPoliticData({ ...politicData, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('/api/politic/add', politicData)
            .then(res => window.location = '/politicsList')
            .catch(error => console.log(error))
    };

    const handleEdit = (id, e) => {
        e.preventDefault()
        axios.put(`/api/politic/${id}`, politicData)
            .then(res => window.location = '/politicsList')
            .catch(error => console.log(error))
        console.log(e)
        console.log(id)
    };



    useEffect(() => {
        if (props.location.aboutProps) {
            //const {authorname, title} = props.location.aboutProps
            setEditData(props.location.aboutProps)
        }
    }, []);

    return (
        <div>
            {props.location.aboutProps ? <h1
                style={{ textAlign: 'center' }} >
                Edit sport</h1> :
                <h1 style={{ textAlign: 'center' }}>
                    Add Sport</h1>}
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                <input defaultValue={editData.title} onChange={handleChange} type="text" name="title" placeholder="enter title" />
                <input defaultValue={editData.authorname} onChange={handleChange} type="text" name="authorname" placeholder="enter authorName" />
                <input defaultValue={editData.description} onChange={handleChange} type="text" name="description" placeholder="enter description" />
                <input onChange={handleChange} type="date" name="date" placeholder="enter date" />
                {props.location.aboutProps ? <input type="submit" value="edit" onClick={(e) => handleEdit(editData.id, e)} /> : <input type="submit" value="submit" onClick={handleSubmit} />}
            </form>
        </div>
    );
};

export default CovidForm;